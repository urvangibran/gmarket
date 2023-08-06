import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, productsSelector } from "../../../actions/products/actionProduct";
import { formatToCurrency } from "../../../utils/helpers";
import { CiDiscount1 } from "react-icons/ci";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Tooltip, Alert, AlertIcon } from "@chakra-ui/react";

const Checkout = () => {
  const [isBuy, setIsBuy] = useState(false)
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart } = useSelector(productsSelector);
  const dispatch = useDispatch()

  useEffect(() => {
    setTotal(0);
    let sum = 0;
    cart.forEach((product) => {
      sum = sum + product.price * product.quantity;
    });
    setTotal(sum);
  }, [cart]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getDiscount = (percentage) => {
    setDiscount(percentage);
    handleCloseModal();
  };

  const handleBuy = () => {
    setIsBuy(true)
    setTimeout(() => {
      dispatch(clearCart())
    }, 3000);
  }

  const totalDiscount = (total * discount) / 100;

  return (
    <div className="border relative shadow-sm rounded-lg p-5 max-w-[400px] h-[50%] md:min-w-[300px]">
      <Tooltip
        hasArrow
        label="Get the discount!"
        placement="top"
      >
        <button
          className="w-full group transition-all active:scale-95"
          onClick={handleOpenModal}
        >
          <div className="flex justify-center items-center -mt-1 border-2 border-[#B1A8A8] rounded-sm group-hover:border-black">
            <CiDiscount1 className="w-7 h-7 text-[#6D7290] group-hover:text-black" />
            <h2 className="p-1 font-semibold text-[#6D7290] text-lg text-center group-hover:text-black">
              Pick your promo
            </h2>
          </div>
        </button>

      </Tooltip>
      <div className="border-b-[10px] left-0 top-[68px] w-full  mr-[8px] absolute border-[#EDEDED] pb-2"></div>
      <br />
      <div className="mt-7">
        <h1 className="text-lg font-bold">Shopping summary</h1>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pick Your Promo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button onClick={() => getDiscount(10)} m={2}>10% Discount</Button>
            <Button onClick={() => getDiscount(20)} m={2}>20% Discount</Button>
            <Button onClick={() => getDiscount(30)} m={2}>30% Discount</Button>
            <Button onClick={() => getDiscount(40)} m={2}>40% Discount</Button>
            <Button onClick={() => getDiscount(50)} m={2}>50% Discount</Button>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleCloseModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="flex items-center justify-between my-4">
        <h3 className="font-medium">Total price (items)</h3>
        <span>{formatToCurrency.format(total)}</span>
      </div>
      <div className="flex items-center justify-between my-4">
        <h3 className="font-medium">Total discounts (items)</h3>
        <span>{formatToCurrency.format(totalDiscount)}</span>
      </div>
      <hr />
      <div className="flex items-center justify-between my-4">
        <h3 className="font-medium">Grandtotal</h3>
        <span>{formatToCurrency.format(total - totalDiscount)}</span>
      </div>
      <Tooltip
        label="The cart will be removed all"
        placement="bottom"
      >
        <button
          className="w-full flex items-center justify-center py-1 bg-[#012A4A] hover:bg-[#034078] text-white font-semibold hover:opacity-90 transition-shadow duration-300 shadow-sm rounded-[10px] focus:outline-none mb-5"
          onClick={handleBuy}
        >
          <h3>Buy ({cart.length})</h3>
        </button>
      </Tooltip>
      {isBuy && (
        <div className="w-full">
          <Alert status="success" variant="left-accent">
            <AlertIcon />
            Thank you for your purchase! 😃 
            <br /> 
            You have spent{" "}
            {formatToCurrency.format(total - totalDiscount)} for this order.
            <br />
            Your cart will be cleared.
          </Alert>
        </div>
      )}


    </div>
  );
};

export default Checkout;

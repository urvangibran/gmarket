import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector, clearWishList } from "../../actions/products/actionProduct";
import WishList from "../List/Wishlist";
import { userSelector } from "../../actions/user/actionUser";

const Wishlist = () => {
  const { likedProducts } = useSelector(productsSelector);
  const { isLoggedIn } = useSelector(userSelector);

  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen} className="relative p-2 group">
        <FiHeart className="h-7 w-7 text-[#012A4A]" />
        <h3 className="absolute opacity-0 group-hover:opacity-100 lucida text-[12px] left-[2px] transition-all ease-in-out duration-500 font-[400]">Wishlist</h3>
        {likedProducts.length > 0 && (
          <div className="cart-num">
            <span className="text-xs">{likedProducts.length}</span>
          </div>
        )}
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="min-w-[600px] max-h-[550px] overflow-auto">
          <ModalHeader className="lucida">Your wishlist({likedProducts.length})</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {likedProducts.length > 0 ? (
              <WishList likedProducts={likedProducts} />
            ) : (
              <p className="text-gray-700 lucida text-center">
                Your wishlist is empty
              </p>
            )}
          </ModalBody>

          <ModalFooter>
            <Tooltip 
              hasArrow
              placement="top"
              label="Clear All Wishlist"
            >
              <Button
                disabled={!likedProducts.length || !isLoggedIn}
                onClick={() => dispatch(clearWishList())}
                variant="solid"
              >
                Clear whislist
              </Button>
            </Tooltip>

            <Button colorScheme="blue" ml={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Wishlist;

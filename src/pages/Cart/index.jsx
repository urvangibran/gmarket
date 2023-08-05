import { Button } from "@chakra-ui/react";
import CartContent from "../../components/Cart";
import Checkout from "../../components/Cart/Checkout";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";
import { productsSelector } from "../../actions/products/actionProduct";

const Cart = () => {
  const { cart } = useSelector(productsSelector);

  return (
    <div className={` w-[90%] h-[80%] py-10 p-4 mx-auto min-h-screen flex justify-center items-start flex-col space-y-6`}>
      <Link to="/">
        <Button
          className='arial'
          leftIcon={<BsArrowLeft />}
          colorScheme="blue"
          variant='outline'
          color='#012A4A'
        >

          Go Back
        </Button>
      </Link>
      <div className="flex w-full flex-col gap-6 md:flex-row">
        <CartContent />
        {cart.length > 0 && <Checkout />}
      </div>
    </div>
  );
};

export default Cart;

import { Button } from "@chakra-ui/react";
import CartContent from "../../components/Cart";
import Checkout from "../../components/Cart/Checkout";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";
import { productsSelector } from "../../features/products/productsSlice";

const Cart = () => {
  const { cart } = useSelector(productsSelector);

  return (
    <div className="max-w-[1024px] py-10 mx-auto min-h-screen flex justify-center items-start flex-col space-y-6">
      <Link to="/">
        <Button className="!font-Poppins" leftIcon={<BsArrowLeft />}>
          Go Home
        </Button>
      </Link>
      <CartContent />
      {cart.length > 0 && <Checkout />}
    </div>
  );
};

export default Cart;

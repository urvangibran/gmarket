import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSelector, login, logout } from "../../features/user/userSlice";
import Wishlist from "../Wishlist";
import { FiShoppingCart } from "react-icons/fi";
import { BiUser } from "react-icons/bi"
import { productsSelector } from "../../features/products/productsSlice";
import { useState } from "react";
import { Tooltip } from "@chakra-ui/react";

const Navbar = () => {
  const [isSignedUp, setIsSignedUp] = useState(false)
  const { isLoggedIn } = useSelector(userSelector);
  const { cart } = useSelector(productsSelector);
  const uniqueCart = cart.filter(
    (item, index, self) => self.findIndex((t) => t.id === item.id) === index
  );

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(isLoggedIn ? logout() : login());
  };

  const handleSignUp = () => {
    setIsSignedUp(true)
  }

  const loginButtonDisabled = !isSignedUp;

  return (
    <div className="py-4 arial border-b sticky z-50 top-0 left-0 right-0 bg-white/40 backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-[1024px] mx-auto">
        <Link to="/">
          <img className="w-[7rem] mt-[-10px]" src={Logo} alt="logo" />
        </Link>
        <div className="flex items-center justify-between space-x-4">
          <Wishlist />
          {isLoggedIn ? (
            <Link className="relative group" to="/profile">
              <BiUser className="w-7 h-7 text-[#012A4A]" />
              <h3 className="absolute opacity-0 group-hover:opacity-100 lucida text-[12px] -left-[1px] transition-all ease-in-out duration-500 font-[400]">Profile</h3>
            </Link>
          ) : (
            <Tooltip
              hasArrow
              label={"Login first to access profile"}
              bg={"gray.300"}
              color={"black"}
            >
              <span className="cursor-not-allowed">
                <BiUser className="w-7 h-7 text-[#012A4A]" />
              </span>
            </Tooltip>
          )}
          <Link to="/cart" className="relative group p-2">
            <FiShoppingCart className="w-7 h-7 text-[#012A4A]" />
            <h3 className="absolute opacity-0 group-hover:opacity-100 lucida text-[12px] left-[15px] transition-all ease-in-out duration-500 font-[400]">Cart</h3>

            {uniqueCart.length > 0 && (
              <div className="cart-num">
                <span className="text-xs">{uniqueCart.length}</span>
              </div>
            )}
          </Link>
          <Tooltip
            hasArrow
            label={loginButtonDisabled ? "Sign up first to log in" : isLoggedIn ? "Click to log out" : "Click to log in"}
            bg={"gray.300"}
            color={"black"}
          >
            <button
              onClick={handleLogin}
              className={`border-2 text-[#012A4A] font-semibold border-[#012A4A] rounded-md py-[2px] px-3 active:scale-95 ${!loginButtonDisabled ? "cursor-pointer hover:bg-[#012A4A] hover:text-white" : "cursor-not-allowed active:scale-100"}`}
              disabled={loginButtonDisabled}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </Tooltip>
          <Tooltip
            hasArrow
            label={isSignedUp ? "Already signed up" : "Click to sign up"}
            bg={"gray.300"}
            color={"black"}
          >
            <button
              onClick={handleSignUp}
              className={`text-white font-semibold border-2 border-[#012A4A] bg-[#012A4A] rounded-md py-[2px] px-3 w-[100px] ${isSignedUp ? "cursor-not-allowed" : "cursor-pointer active:scale-90  hover:bg-white hover:text-[#012A4A]"
                }`}
              disabled={isSignedUp}
            >
              {isSignedUp ? "Signed" : "Sign up"}
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSelector, login, logout, signup } from "../../actions/user/actionUser";
import { productsSelector } from "../../actions/products/actionProduct";
import { Tooltip } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import Wishlist from "../WishlistCard";
import { FiShoppingCart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { isLoggedIn, isSigned } = useSelector(userSelector);
  const { cart } = useSelector(productsSelector);
  const uniqueCart = cart.filter(
    (item, index, self) => self.findIndex((t) => t.id === item.id) === index
  );

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(isLoggedIn ? logout() : login());
  };

  const handleSignup = () => {
    dispatch(signup());
  };

  const loginButtonDisabled = !isSigned;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="py-4 border-b sticky z-50 top-0 left-0 right-0 bg-white/40 backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-[1024px] mx-auto">
        <Link to="/" className="max-w-[7rem] mt-[-10px]">
          <img className="max-w-[100%]" src={Logo} alt="logo" />
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Wishlist />
          {isLoggedIn ? (
            <Link className="relative group" to="/account/profile">
              <BiUser className="w-7 h-7 text-[#012A4A]" />
              <h3 className="absolute opacity-0 group-hover:opacity-100 lucida text-[12px] -left-[7px] transition-all ease-in-out duration-500 font-[400]">Account</h3>
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
            label={isSigned ? "Already signed up" : "Click to sign up"}
            bg={"gray.300"}
            color={"black"}
          >
            <button
              onClick={handleSignup}
              className={`text-white font-semibold border-2 border-[#012A4A] bg-[#012A4A] rounded-md py-[2px] px-3 w-[100px] ${isSigned ? "cursor-not-allowed" : "cursor-pointer active:scale-90  hover:bg-white hover:text-[#012A4A]"
                }`}
              disabled={isSigned}
            >
              {isSigned ? "Signed" : "Sign up"}
            </button>
          </Tooltip>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-[#012A4A] p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 mx-5">
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
            label={isSigned ? "Already signed up" : "Click to sign up"}
            bg={"gray.300"}
            color={"black"}
          >
            <button
              onClick={handleSignup}
              className={`text-white font-semibold border-2 border-[#012A4A] bg-[#012A4A] rounded-md py-[2px] px-3 w-[100px] ${isSigned ? "cursor-not-allowed" : "cursor-pointer active:scale-90  hover:bg-white hover:text-[#012A4A]"
                }`}
              disabled={isSigned}
            >
              {isSigned ? "Signed" : "Sign up"}
            </button>
          </Tooltip>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

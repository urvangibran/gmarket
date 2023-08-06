import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";
import Account from "../pages/Account";
import Other from "../components/Other";
import BankNCards from "../components/Other/BankNCards";
import Adress from "../components/Other/Adress";
import Password from "../components/Other/Password";
import Notification from "../components/Other/Notification";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account/profile" element={<Account />} />
      <Route path="/account/other" element={<Other />} />
      <Route path="/account/bank&cards" element={<BankNCards />} />
      <Route path="/account/adress" element={<Adress />} />
      <Route path="/account/password" element={<Password />} />
      <Route path="/account/notification" element={<Notification />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default router;

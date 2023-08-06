import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";
import Account from "../pages/Account";
import Other from "../components/Other";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account/profile" element={<Account />} />
      <Route path="/account/other" element={<Other />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default router;

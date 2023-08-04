import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import ProductInfo from "../pages/ProductInfo";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/products/:id" element={<ProductInfo />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default router;

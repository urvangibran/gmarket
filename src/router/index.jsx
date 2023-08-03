import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default router;

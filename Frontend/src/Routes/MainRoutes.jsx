import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import PageNotFound  from "../PageNotFound";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import Register from "../Pages/Register";
import CreateProduct from "../Pages/Admin/CreateProduct";
const MainRoutes = () => {
  return (<div>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/create-product" element={<CreateProduct/>}/>
    </Routes>
  </div>
  );
};

export default MainRoutes;

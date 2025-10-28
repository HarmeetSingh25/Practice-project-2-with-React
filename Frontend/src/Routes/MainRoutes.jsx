import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import PageNotFound from "../PageNotFound";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import Register from "../Pages/Register";
import CreateProduct from "../Pages/Admin/CreateProduct";
import ProductDetail from "../Pages/Admin/ProductDetail";
import UpdateProdct from "../Pages/Admin/UpdateProdct";
import Updateproductforn from "../Pages/Admin/Updateproductforn";
import Setting from "../Pages/Setting/Setting";
import Edituserinfo from "../Pages/Setting/Edituserinfo";
import UpdatePassword from "../Pages/Setting/UpdatePassword";
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/edituserinfo" element={<Edituserinfo />} />
        <Route path="/updatepassword" element={<UpdatePassword />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/updateproduct" element={<UpdateProdct />} />
        <Route path="/updateproductform/:id" element={<Updateproductforn />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;

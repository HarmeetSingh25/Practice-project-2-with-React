import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// ✅ Lazy imports (all done correctly now)
const Home = lazy(() => import("../Pages/Home"));
const PageNotFound = lazy(() => import("../PageNotFound"));
const Cart = lazy(() => import("../Pages/Cart"));
const Login = lazy(() => import("../Pages/Login"));
const Products = lazy(() => import("../Pages/Products"));
const Register = lazy(() => import("../Pages/Register"));
const CreateProduct = lazy(() => import("../Pages/Admin/CreateProduct"));
const ProductDetail = lazy(() => import("../Pages/Admin/ProductDetail"));
const UpdateProdct = lazy(() => import("../Pages/Admin/UpdateProdct"));
const Updateproductforn = lazy(() => import("../Pages/Admin/Updateproductforn"));
const Setting = lazy(() => import("../Pages/Setting/Setting"));
const Edituserinfo = lazy(() => import("../Pages/Setting/Edituserinfo"));
const UpdatePassword = lazy(() => import("../Pages/Setting/UpdatePassword"));
const AuthWrapper = lazy(() => import("../Routes/AuthWrapper"));

const MainRoutes = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* ✅ Suspense wrapper for lazy-loaded components */}
      <Suspense fallback={<div className="text-center py-10 text-amber-400 text-xl font-semibold">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/edituserinfo" element={<Edituserinfo />} />
          <Route path="/updatepassword" element={<UpdatePassword />} />

          {/* ✅ Protected Route */}
          <Route
            path="/create-product"
            element={
              <AuthWrapper>
                <CreateProduct />
              </AuthWrapper>
            }
          />

          <Route path="/updateproduct" element={<UpdateProdct />} />
          <Route path="/updateproductform/:id" element={<Updateproductforn />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />

          {/* ✅ 404 Page */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MainRoutes;

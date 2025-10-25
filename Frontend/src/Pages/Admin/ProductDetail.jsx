import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { asynsaveproduct } from "../../Store/Useractions/useraction";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const currentUser = useSelector((state) => state.user.user); // get user object
  // console.log(currentUser); // should show { id: "1", username: "Harmeet", ... }

  const dispatch = useDispatch();

  // find product (convert id to string for safety)
  const product = products?.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <h2 className="text-gray-400 text-lg">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* LEFT: Product Image */}
        <div className="md:w-1/2 flex items-center justify-center bg-gray-700 p-8">
          <img
            src={product.image}
            alt={product.ProductName}
            className="w-full max-h-[450px] object-contain rounded-lg"
          />
        </div>

        {/* RIGHT: Product Details */}
        <div className="md:w-1/2 p-10 flex flex-col">
          <h1 className="text-3xl font-bold text-amber-400 mb-4">
            {product.ProductName}
          </h1>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            {product.ProductDescription}
          </p>

          <div className="flex items-center justify-between mb-6">
            <span className="text-4xl font-bold text-amber-400">
              ₹{product.ProductPrice}
            </span>
            <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-lg">
              {product.ProductCategory}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-auto">
            <button
              onClick={() => {
                if (currentUser) {
                  dispatch(asynsaveproduct(product, currentUser.id));
                } else {
                  alert("Please login first!");
                }
              }}
              className="bg-amber-400 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-amber-500 transition"
            >
              Add to Cart
            </button>
            <Link
              to="/products"
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-500 transition"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
      {/* <h1>fd</h1> */}
    </div>
  );
};

export default ProductDetail;

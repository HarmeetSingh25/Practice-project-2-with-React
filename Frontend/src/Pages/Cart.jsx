import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncremoveFromCart } from "../Store/Useractions/useraction";

const Cart = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user);
  const cart = user?.cart || [];

  // Fake loading state (replace with real API loading if you want)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); // simulate API delay
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-6 text-white">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-amber-400 mb-10 text-center">
        Your Cart
      </h1>

      {/* Empty Cart */}
      {!loading && cart.length === 0 && (
        <p className="text-center text-gray-400">Your cart is empty.</p>
      )}

      <div className="max-w-5xl mx-auto space-y-6">
        {/* If loading show skeletons */}
        {loading
          ? Array(4)
              .fill("")
              .map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-gray-800 rounded-xl p-5 shadow animate-pulse"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-700 rounded-lg "></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-700 rounded w-40 "></div>
                      <div className="h-4 bg-gray-700 rounded w-28 "></div>
                    </div>
                  </div>
                  <div className="w-16 h-8 bg-gray-700 rounded "></div>
                </div>
              ))
          : cart.map(
              ({
                id,
                ProductName,
                ProductPrice,
                ProductDescription,
                ProductCategory,
                image,
                quantity,
              }) => (
                <div
                  key={id}
                  className="flex items-center justify-between bg-gray-800 rounded-xl p-5 shadow-lg hover:shadow-amber-500/20 transition"
                >
                  {/* Product Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={image}
                      alt={ProductName}
                      className="w-20 h-20 object-contain rounded-lg bg-gray-700"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-white">
                        {ProductName}
                      </h2>
                      <p className="text-gray-400 text-sm">
                        ₹{ProductPrice} × {quantity}
                      </p>
                      <p className="text-amber-400 font-bold">
                        ₹{Number(ProductPrice) * quantity}
                      </p>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button className="bg-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-500 transition" onClick={() => dispatch(asyncremoveFromCart(id, user.id))}
>
                    Remove
                  </button>
                </div>
              )
            )}
      </div>
    </div>
  );
};

export default Cart;

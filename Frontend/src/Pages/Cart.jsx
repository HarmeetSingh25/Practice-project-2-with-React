import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncremoveFromCart } from "../Store/Useractions/useraction";

const Cart = () => {
  const dispatch = useDispatch();

  // 1) hooks at top (always)
  const user = useSelector((state) => state?.user?.user);
  const products = useSelector((state) => state?.product?.products) || [];

  // 2) treat user.cart as an array
  const cartArray = user?.cart || []; // e.g. [{ productId: "1", quantity: 3 }, ...]

  // 3) Build cartItems: product info + quantity
  const cartItems = cartArray
    .map((item) => {
      const prod = products.find((p) => String(p.id) === String(item.productId));
      if (!prod) return null; // product not found in product list
      return {
        ...prod,
        quantity: item.quantity ?? 1,
        cartProductId: item.productId, // store original cart id for remove
      };
    })
    .filter(Boolean);

  // console.log("products:", products);
  // console.log("cartArray:", cartArray);
  // console.log("cartItems:", cartItems);

  // Fake loading state (replace with real API loading if you want)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  // Remove handler: pass cartProductId (or adjust to match your action signature)
  const handleRemove = (cartProductId) => {
    console.log(cartProductId);
    
    // if your asyncremoveFromCart expects (productId, userId) — pass accordingly
    // Here we assume it wants the productId and the user.id
    if (!user?.id) return;
    dispatch(asyncremoveFromCart(cartProductId, user.id));
  };

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-6 text-white">
      <h1 className="text-3xl font-bold text-amber-400 mb-10 text-center">
        Your Cart
      </h1>

      {/* Empty Cart check: wait until not loading */}
      {!loading && cartItems.length === 0 && (
        <p className="text-center text-gray-400">Your cart is empty.</p>
      )}

      <div className="max-w-5xl mx-auto space-y-6">
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
          : cartItems.map((item) => {
              // adjust property names to match your product object
              const id = item.id;
              const ProductName = item.ProductName ?? item.name ?? item.title;
              const ProductPrice = item.ProductPrice ?? item.price ?? 0;
              const image = item.image ?? item.img ?? "";
              const quantity = item.quantity ?? 1;
              const cartProductId = item.cartProductId;

              return (
                <div
                  key={cartProductId ?? id}
                  className="flex items-center justify-between bg-gray-800 rounded-xl p-5 shadow-lg hover:shadow-amber-500/20 transition"
                >
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
                        ₹{Number(ProductPrice) * Number(quantity)}
                      </p>
                    </div>
                  </div>

                  <button
                    className="bg-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-500 transition"
                    onClick={() => handleRemove(cartProductId ?? id,user.id)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Cart;

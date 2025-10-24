import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../Store/Slices/cartslice";
import { useParams } from "react-router";

const Cart = () => {
  // const {id}=useParams()
  // console.log(id);
  
  const cart = useSelector((state) => state.carts); // ✅ select from redux
  console.log(cart);
  
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-6 text-white">
      <h1 className="text-3xl font-bold text-amber-400 mb-8 text-center">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cart.map?.((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-400">₹{item.price}</p>
                <p className="text-sm text-gray-400">
                  Quantity: {item.quantity}
                </p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 px-4 py-2 rounded-lg font-medium hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            onClick={() => dispatch(clearCart())}
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition w-full"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

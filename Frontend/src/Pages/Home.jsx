import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-400 leading-tight">
            Welcome to <span className="text-white">MyShop</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Discover amazing products with best prices. Shop now and enjoy a seamless experience.
          </p>
          <div className="flex gap-4">
            <Link
              to="/products"
              className="bg-amber-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 transition"
            >
              Shop Now
            </Link>
            <Link
              to="/cart"
              className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition"
            >
              View Cart
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            alt="Shopping Illustration"
            className="w-80 md:w-[400px] drop-shadow-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="bg-gray-700 p-6 rounded-xl text-center shadow-md hover:shadow-amber-500/20 transition">
            <h3 className="text-xl font-semibold text-amber-400 mb-3">Best Deals</h3>
            <p className="text-gray-300">
              Get top quality products at unbeatable prices every day.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl text-center shadow-md hover:shadow-amber-500/20 transition">
            <h3 className="text-xl font-semibold text-amber-400 mb-3">Fast Delivery</h3>
            <p className="text-gray-300">
              Your orders delivered quickly and safely to your doorstep.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl text-center shadow-md hover:shadow-amber-500/20 transition">
            <h3 className="text-xl font-semibold text-amber-400 mb-3">Secure Payments</h3>
            <p className="text-gray-300">
              Pay easily with multiple secure payment options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

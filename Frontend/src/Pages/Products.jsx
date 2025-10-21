import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <div className="bg-gray-900 min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center text-amber-400 mb-10">
        Products
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {products.length === 0 ? (
          <p className="col-span-full text-center text-gray-400">
            No products available
          </p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-5 flex flex-col"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              {/* Title */}
              <h2 className="text-lg font-semibold text-white mb-1">
                {product.title}
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                {product.description}
              </p>

              {/* Price */}
              <span className="text-amber-400 font-bold text-lg mb-2">
                ₹{product.price}
              </span>

              {/* Category */}
              <span className="text-xs text-gray-500 mb-4">
                {product.category}
              </span>

              {/* Button */}
              <button className="mt-auto bg-amber-400 text-gray-900 py-2 rounded-lg font-medium hover:bg-amber-500 transition">
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;

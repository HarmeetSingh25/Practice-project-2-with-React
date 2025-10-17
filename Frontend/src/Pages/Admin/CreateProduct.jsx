import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CreateProduct = () => {
//   const [imageUrl, setImageUrl] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const Submit = (user) => {
    user.id = nanoid();
    console.log(user);
  };
  const Error = (errors) => {
    console.log(errors);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        {/* Header */}
        <h1 className="text-3xl font-semibold text-white mb-6 text-center">
          Create Product
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit(Submit, Error)}
          className="flex flex-col gap-6"
        >
          {/* Image Input */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-300 mb-1">
              Image URL
            </label>
            <input {...register("image",{required:"Image is required"})}
              className="bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Paste Image URL"
              type="text"
            //   value={imageUrl}
            />
            {/* Image Preview */}
            {/* {user.image && (
              <div className="mt-4 flex justify-center">
                <img
                  src={user.image}
                  alt="Preview"
                  className="w-40 h-40 object-cover rounded-lg border border-gray-600"
                />
              </div>
            )} */}
          </div>

          {/* Title */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-300 mb-1">
              Title
            </label>
            <input {...register("ProductName",{required:"Product name is required"})}
              className="bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter Product Name"
              type="text"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-300 mb-1">
              Price
            </label>
            <input
              className="bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter Price"
              type="number"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-300 mb-1">
              Description
            </label>
            <textarea
              className="bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter Description"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-300 mb-1">
              Category
            </label>
            <select className="bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option value="">Select Category</option>
              <option value="men">Men’s Clothing</option>
              <option value="women">Women’s Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="jewelry">Jewelry</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 py-3 rounded-lg font-medium hover:bg-yellow-500 transition duration-300"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;

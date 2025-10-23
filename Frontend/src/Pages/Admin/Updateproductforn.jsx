import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { asyncUpdateProduct } from "../../Store/Useractions/Updateproductaction";

const UpdateProductForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const product = products?.find((p) => String(p.id) === id);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: product
      ? {
          ProductName: product?.ProductName,
          ProductPrice: product?.ProductPrice,
          ProductCategory: product?.ProductCategory,
          ProductDescription: product?.ProductDescription,
          image: product?.image,
        }
      : {},
  });

  // Live watch for image field
  const imagePreview = watch("image", product?.image);

  const updatehandler = (data) => {
    const updatedData = { ...product, ...data, id: product.id }; // keep id
    dispatch(asyncUpdateProduct(updatedData));
  };

  if (!product) {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-lg">Product not found</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit(updatehandler)}
        className="bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-3xl grid md:grid-cols-2 gap-8"
      >
        {/* LEFT SIDE: Product Fields */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-amber-400 text-center">
            Update Product
          </h1>

          {/* Product Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-300 mb-1">
              Product Name
            </label>
            <input
              {...register("ProductName", {
                required: "Product Name is required",
              })}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter product name"
            />
            {errors.ProductName&&<p className="text-red-500">{errors.ProductName.message}</p>}
          </div>

          {/* Product Price */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-300 mb-1">
              Price
            </label>
            <input
              type="number"
              {...register("ProductPrice")}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter price"
            />
          </div>

          {/* Product Category */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-300 mb-1">
              Category
            </label>
            <input
              {...register("ProductCategory")}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter category"
            />
          </div>

          {/* Product Description */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-300 mb-1">
              Description
            </label>
            <textarea
              {...register("ProductDescription")}
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter description"
            />
          </div>

          {/* Image URL */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-300 mb-1">
              Image URL
            </label>
            <input
              {...register("image")}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter image URL"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Live Image Preview */}
        <div className="flex flex-col items-center justify-center bg-gray-700 rounded-xl p-6">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Product Preview"
              className="w-full h-80 object-contain rounded-lg shadow-lg"
            />
          ) : (
            <p className="text-gray-400">No image available</p>
          )}
        </div>

        {/* Buttons - Full Width on Bottom */}
        <div className="md:col-span-2 flex gap-4 mt-6">
          <button
            type="submit"
            className="flex-1 bg-amber-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-amber-500 transition"
          >
            Save Changes
          </button>
          <Link
            to="/updateproduct"
            className="flex-1 text-center bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-500 transition"
          >
            Back to Products
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UpdateProductForm;

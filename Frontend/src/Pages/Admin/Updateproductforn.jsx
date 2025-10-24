import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  asyncUpdateProduct,
  asynDeleteProduct,
} from "../../Store/Useractions/Updateproductaction";
import { toast } from "react-toastify";

const UpdateProductForm = () => {
  const navigate = useNavigate();
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

  const imagePreview = watch("image", product?.image);

  const updateHandler = (data) => {
    console.log(data);

    const updatedData = { ...product, ...data };
    dispatch(asyncUpdateProduct(updatedData));
    toast.success("Product updated successfully");
    navigate("/updateproduct");
  };

  const deleteHandler = () => {
    toast.error("Product deleted (demo only)");
    // here you’ll later call your asyncDeleteProduct action
//    const filterProducts = products.filter((p) => String(p.id) !== id);

//     console.log(filterProducts);

   dispatch( asynDeleteProduct(id))
    navigate("/updateproduct");
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
      <div className="bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-4xl">
        {/* Header */}
        <h1 className="text-3xl font-bold text-amber-400 text-center mb-8">
          Update Product
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT SIDE: Product Fields */}
          <form
            onSubmit={handleSubmit(updateHandler)}
            className="space-y-6 flex flex-col"
          >
            {/* Product Name */}
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 block">
                Product Name
              </label>
              <input
                {...register("ProductName", {
                  required: "Product Name is required",
                })}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter product name"
              />
              {errors.ProductName && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.ProductName.message}
                </p>
              )}
            </div>

            {/* Price */}
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 block">
                Price
              </label>
              <input
                type="number"
                {...register("ProductPrice")}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter price"
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 block">
                Category
              </label>
              <input
                {...register("ProductCategory")}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter category"
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 block">
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
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 block">
                Image URL
              </label>
              <input
                {...register("image")}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter image URL"
              />
            </div>

            {/* Save Button */}
            <button className="bg-amber-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-amber-500 transition">
              Save Changes
            </button>
          </form>

          {/* RIGHT SIDE: Image Preview + Delete */}
          <div className="flex flex-col items-center justify-between bg-gray-700 rounded-xl p-6">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Product Preview"
                className="w-full h-72 object-contain rounded-lg shadow-lg"
              />
            ) : (
              <p className="text-gray-400">No image available</p>
            )}

            <button
              type="button"
              onClick={deleteHandler}
              className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-500 transition"
            >
              Delete Product
            </button>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-6 text-center">
          <Link
            to="/updateproduct"
            className="text-gray-400 hover:text-amber-400"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductForm;

import React from 'react'

const ProductsTemplete = () => {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
            {products.length === 0 ? (
                <p className="col-span-full text-center text-gray-400">
                    No products available
                </p>
            ) : (
                products.map((product) => (
                    <Link key={product.id} to={`/productdetail/${product.id}`}>

                        <div
                            key={product.id}
                            className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-5 flex flex-col"
                        >
                            {/* Image */}
                            <img
                                src={product.image}
                                alt={product.ProductName}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />

                            {/* ProductName */}
                            <h2 className="text-lg font-semibold text-white mb-1">
                                {product.ProductName}
                            </h2>

                            {/* ProductDescription */}
                            <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                                {product.ProductDescription}
                            </p>

                            {/* ProductPrice */}
                            <span className="text-amber-400 font-bold text-lg mb-2">
                                ₹{product.ProductPrice}
                            </span>

                            {/* ProductCategory */}
                            <span className="text-xs text-gray-500 mb-4">
                                {product.ProductCategory}
                            </span>

                            {/* Button */}

                            <button
                                className="mt-auto bg-amber-400 text-gray-900 py-2 rounded-lg font-medium hover:bg-amber-500 transition">
                                More Info
                            </button>
                        </div>
                    </Link>
                ))
            )}
        </div>
    )
}

export default ProductsTemplete
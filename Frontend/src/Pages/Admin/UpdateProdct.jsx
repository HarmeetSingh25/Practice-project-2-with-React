import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router'

const UpdateProdct = () => {
   const products=useSelector(state=>state.product.products)
//    console.log(product);
  
//   useForm({defaultValues:{}})
  return (
    
    <div className="bg-gray-900 min-h-screen py-10">
        {/* {
 products.map?.((product)=>{
    console.log(product);
    

   })
        } */}
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
            <Link key={product.id} to={`/updateproductform/${product.id}`}>
            
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
              className="mt-auto bg-blue-400 text-white py-2 rounded-lg font-medium hover:bg-blue-500 transition">
             Update Product
              </button>
            </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}

export default UpdateProdct
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "../Api/axiosconfig";
// import { useSelector } from "react-redux";
// import { addToCart } from "../Store/Slices/cartslice";
const ProductsTemplete = lazy(() => import("./ProductsTemplete"))
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
const Products = () => {
  const [products, setproducts] = useState([])
  const [hasmore, sethasmore] = useState(true)
  const fetchproducts = async () => {
    try {
      const { data } = await axios.get(`/products?_limit=4&_start=${products.length}`)
      if (data.length === 0) {
        sethasmore(false);
      } else {
        setproducts((prev) => [...prev, ...data]);
      }


    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    fetchproducts()
  }, [])

  return (
    <InfiniteScroll className="bg-gray-900"
      dataLength={products.length}
      next={fetchproducts}
      hasMore={hasmore} // we’ll make this dynamic later
      loader={<h4>Loading...</h4>}
      endMessage={<p style={{ textAlign: "center" }}>🎉 Yay! You have seen it all</p>}

    >

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
              <Suspense fallback={
                <h1 className="text-yellow-300">Loading</h1>
              }
              key={product.id}
              >

                <ProductsTemplete product={product} />
              </Suspense>
            ))
          )}
        </div>
      </div>
    </InfiniteScroll>


  );
};

export default Products;

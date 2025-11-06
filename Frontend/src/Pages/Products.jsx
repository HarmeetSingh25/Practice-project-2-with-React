import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "../Api/axiosconfig";
// import { useSelector } from "react-redux";
// import { addToCart } from "../Store/Slices/cartslice";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductsTemplete from "./ProductsTemplete";
const Products = () => {
  // const { products } = useSelector((state) => state.product);
  const [products, setproducts] = useState([])
  const [hasmore, sethasmore] = useState(true)
  const fetchproducts = async () => {
    try {
      const { data } = await axios.get(`/products?_limit=4&_start=${products.length}`)
      // console.log(data);
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

       {ProductsTemplete()}
      </div>
    </InfiniteScroll>
    

  );
};

export default Products;

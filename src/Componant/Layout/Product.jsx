/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import useStore from "/src/Store/Stoe.js";
import {products} from "/src/Store/Data";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";



const Product = () => {
  const { addTocart, addToWishlist } = useStore();
  const [time, setTime] = useState(3 * 24 * 60 * 60 + 23 * 3600 + 19 * 60 + 56);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => String(num).padStart(2, '0');

  const days = formatTime(Math.floor(time / 86400));
  const hours = formatTime(Math.floor((time % 86400) / 3600));
  const minutes = formatTime(Math.floor((time % 3600) / 60));
  const seconds = formatTime(time % 60);

  return (
    <section className="max-w-[1400px] mx-auto py-10 px-4 font-sans">
      
      {/* SECTION HEADER */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
        <span className="text-[#DB4444] font-bold text-sm">Today's</span>
      </div>

      <div className="flex items-end gap-16 mb-10 flex-wrap">
        <h2 className="text-4xl font-semibold tracking-wide">Flash Sales</h2>

        {/* TIMER UI */}
        <div className="flex gap-4 items-center">
          <div className="flex flex-col">
            <span className="text-[12px] font-medium">Days</span>
            <span className="text-3xl font-bold">{days}</span>
          </div>
          <span className="text-[#E07575] text-2xl mt-4">:</span>
          <div className="flex flex-col">
            <span className="text-[12px] font-medium">Hours</span>
            <span className="text-3xl font-bold">{hours}</span>
          </div>
          <span className="text-[#E07575] text-2xl mt-4">:</span>
          <div className="flex flex-col">
            <span className="text-[12px] font-medium">Minutes</span>
            <span className="text-3xl font-bold">{minutes}</span>
          </div>
          <span className="text-[#E07575] text-2xl mt-4">:</span>
          <div className="flex flex-col">
            <span className="text-[12px] font-medium">Seconds</span>
            <span className="text-3xl font-bold">{seconds}</span>
          </div>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="bg-[#F5F5F5] h-[250px] flex items-center justify-center rounded relative overflow-hidden">
              
              {/* Discount Tag */}
              {product.discount && (
                <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-[12px] px-3 py-1 rounded">
                  {product.discount}
                </span> 
              )}

              {/* Action Icons (Wishlist & View) */}
              <div className="absolute top-3 right-3 z-50 flex flex-col gap-2">
                          <button onClick={() => {  addToWishlist(product); }} className="bg-white flex items-center justify-center p-1.5 rounded-full hover:bg-gray-200 transition">
                              <FaRegHeart />
                          </button>
                          <button className="bg-white p-1.5 rounded-full hover:bg-gray-200 transition">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                          </button>
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                className="w-full h-full object-contain mix-blend-multiply"
                alt={product.title}
              />

              {/* Hover Add To Cart Button */}
              <button
                onClick={() => addTocart(product)}
                className="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                Add To Cart
              </button>
            </div>

            {/* Product Details */}
            <div className="mt-4 flex flex-col gap-2">
           
             <Link to={`/productdetails/${product.id}`}> <h3 className="font-medium text-base truncate">{product.title}</h3> </Link>

              <div className="flex gap-3 items-center">
                <span className="text-[#DB4444] font-semibold">${product.price}</span>
                <span className="line-through text-gray-500 font-medium">${product.oldPrice}</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex text-[#FFAD33] text-lg">
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>{index < product.rating ? "★" : "☆"}</span>
                  ))}
                </div>
                <span className="text-gray-500 text-[14px] font-semibold">
                  ({product.reviews})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW ALL BUTTON */}
      <div className="flex justify-center mt-12">
        <button className="bg-[#DB4444] text-white px-12 py-4 rounded font-medium hover:bg-red-600 transition">
          View All Products
        </button>
      </div>

    </section>
  );
};

export default Product;
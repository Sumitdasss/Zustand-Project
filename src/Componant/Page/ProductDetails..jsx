/* eslint-disable no-unused-vars */
import  { useState } from "react";
import useStore from "/src/Store/Stoe.js";
import { useParams } from "react-router-dom";
import { products } from "/src/Store/Data.jsx";

const ProductDetail = () => {
  const { addToWishlist, wishlist,decreasePopulation,increasePopulation } = useStore();
 const { id } = useParams();

const product = products.find(
  (item) => item.id === Number(id)
);
  // ডামি প্রোডাক্ট ডাটা
 
  const [mainImg, setMainImg] = useState(
  product.gallery?.[0] || product.image
);
  const [quantity, setQuantity] = useState(2);
  const [selectedSize, setSelectedSize] = useState("M");
  const isFavorite = wishlist.some((item) => item.id === product.id);

  return (
    <div className="max-w-[1170px] mx-auto py-16 px-4 font-sans">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-10">
        Account  /  Gaming  /  <span className="text-black font-semibold">{product.title}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* LEFT: Image Gallery */}
        <div className="flex gap-4 lg:w-2/3">
         <div className="flex flex-col gap-4">
  {product.gallery?.map((img, index) => (
    <div
      key={index}
      onClick={() => setMainImg(img)}
      className="w-24 h-24 bg-[#F5F5F5] flex items-center justify-center rounded cursor-pointer border"
    >
      <img
        src={img}
        alt={`gallery-${index}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>
          <div className="bg-[#F5F5F5] flex-1 flex items-center justify-center rounded p-10">
            <img src={mainImg} alt="main" className="max-w-full h-auto object-contain mix-blend-multiply" />
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="lg:w-1/3">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="flex text-[#FFAD33]">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < product.rating ? "★" : "☆"}</span>
              ))}
            </div>
            <span className="text-gray-400 text-sm">({product.reviews} Reviews)</span>
            <span className="text-gray-300">|</span>
            <span className="text-[#00FF66] text-sm">{product.stockStatus}</span>
          </div>

          <div className="text-2xl font-medium mb-4">${product.price.toFixed(2)}</div>
          
          <p className="text-sm leading-relaxed mb-6 border-b pb-6 border-gray-300">
            {product.description}
          </p>

          {/* Colours */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xl">Colours:</span>
            <div className="flex gap-2">
              <button className="w-5 h-5 rounded-full bg-[#A0BCE0] ring-1 ring-offset-2 ring-black"></button>
              <button className="w-5 h-5 rounded-full bg-[#E07575]"></button>
            </div>
          </div>

          {/* Sizes */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xl">Size:</span>
            <div className="flex gap-3">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-8 border rounded text-sm font-medium transition ${
                    selectedSize === size ? "bg-[#DB4444] text-white border-[#DB4444]" : "hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex border rounded overflow-hidden h-11">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 border-r hover:bg-gray-100">-</button>
              <input type="text" value={quantity} readOnly className="w-12 text-center font-bold" />
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 bg-[#DB4444] text-white">+</button>
            </div>
            
            <button className="flex-1 bg-[#DB4444] text-white h-11 rounded font-medium hover:bg-red-600 transition">
              Buy Now
            </button>
            
            <button 
              onClick={() => addToWishlist(product)}
              className={`p-2.5 border rounded hover:bg-gray-50 transition ${isFavorite ? "text-red-500" : ""}`}
            >
              <svg className={`w-6 h-6 ${isFavorite ? "fill-current" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
          </div>

          {/* Delivery Info */}
          <div className="border rounded">
            <div className="flex items-center gap-4 p-4 border-b">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
              <div>
                <h4 className="font-medium text-base">Free Delivery</h4>
                <p className="text-xs underline cursor-pointer">Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              <div>
                <h4 className="font-medium text-base">Return Delivery</h4>
                <p className="text-xs">Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
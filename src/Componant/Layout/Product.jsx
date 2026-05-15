/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import  useStore  from "/src/Store/Stoe.js";
const products = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    image: "https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg",
    discount: "-40%",
    rating: 5,
    reviews: 88,
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    image: "https://images.pexels.com/photos/10054188/pexels-photo-10054188.jpeg",
    rating: 4,
    reviews: 75,
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    image: "https://images.pexels.com/photos/12920900/pexels-photo-12920900.jpeg",
    rating: 5,
    reviews: 99,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    image: "https://images.pexels.com/photos/30726378/pexels-photo-30726378.jpeg",
    rating: 4,
    reviews: 99,
  },
];

const Product = () => {
  const { addTocart } = useStore();

  const [time, setTime] = useState(3 * 24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(time / 86400);
  const hours = Math.floor((time % 86400) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <section className="max-w-[1440px] mx-auto mt-[30px]">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-10 flex-wrap gap-5">
        <h2 className="text-4xl font-bold">Flash Sales</h2>

        {/* TIMER */}
        <div className="flex gap-4 text-xl font-bold">
          {days} : {hours} : {minutes} : {seconds}
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id}>
            <div className="bg-gray-100 p-4 rounded relative group">

              {/* discount */}
              {product.discount && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount}
                </span>
              )}

              {/* image */}
              <img
                src={product.image}
                className="w-full h-52 object-contain"
                alt=""
              />

              {/* ADD TO CART */}
              <button
                onClick={() => addTocart(product)}
                className="absolute bottom-0 left-0 w-full bg-black text-white py-3 opacity-0 group-hover:opacity-100 transition"
              >
                Add To Cart
              </button>
            </div>

            {/* INFO */}
            <div className="mt-4">
              <h3 className="font-semibold">{product.title}</h3>

              <div className="flex gap-3 mt-2">
                <span className="text-red-500 font-semibold">
                  ${product.price}
                </span>
                <span className="line-through text-gray-400">
                  ${product.oldPrice}
                </span>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <div className="text-yellow-400">★★★★★</div>
                <span className="text-gray-500 text-sm">
                  ({product.reviews})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;


import  useStore  from "/src/Store/Stoe.js";

const Cartpage = () => {
const { cart,increasePopulation,decreasePopulation } = useStore();
   
    const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
  
  
    <section className="max-w-7xl mx-auto px-4 py-10">
   
      <div className="grid grid-cols-4 bg-white shadow-sm rounded-md px-6 py-5 font-medium mb-6">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p className="text-right">Subtotal</p>
      </div>

     
      {cart.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-4 items-center bg-white shadow-sm rounded-md px-6 py-5 mb-6"
        >
          {/* Product */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-14"
              />

       
            </div>

            <p>{item.title}</p>
          </div>

          {/* Price */}
          <p>${item.price}</p>

          {/* Quantity */}
          <div>
            <button className="border px-2 py-1 rounded-l-md" onClick={() => decreasePopulation(item.id)}>
              -
            </button>
            <span className="border-t border-b px-4 py-1">{item.quantity}</span>
           
            <button className="border px-2 py-1 rounded-r-md"  onClick={() => increasePopulation(item.id)}>
              +
            </button>
          </div>

          {/* Subtotal */}
          <p className="text-right">
            ${item.price * item.quantity}
          </p>
        </div>
      ))}

     
      <div className="flex items-center justify-between flex-wrap gap-4 mb-14">
        <button className="border px-8 py-4 rounded-md font-medium">
          Return To Shop
        </button>

        <button className="border px-8 py-4 rounded-md font-medium">
          Update Cart
        </button>
      </div>

      {/* Bottom */}
      <div className="flex flex-col lg:flex-row gap-10 justify-between">
        {/* Coupon */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border px-5 py-4 rounded-md w-72 h-15 outline-none"
          />

          <button className="bg-red-500 h-15   text-white px-10 rounded-md">
            Apply Coupon
          </button>
        </div>

        {/* Total */}
        <div className="border rounded-md p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6">
            Cart Total
          </h2>

          <div className="flex justify-between border-b pb-4 mb-4">
            <p>Subtotal:</p>
            <p>${total}</p>
          </div>

          <div className="flex justify-between border-b pb-4 mb-4">
            <p>Shipping:</p>
            <p>Free</p>
          </div>

          <div className="flex justify-between mb-8">
            <p>Total:</p>
            <p>${total}</p>
          </div>

          <button className="w-full bg-red-500 text-white py-4 rounded-md">
            Proceeds to checkout
          </button>
        </div>
      </div>
    </section>
  );
}
  


export default Cartpage
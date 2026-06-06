
import useStore from "/src/Store/Stoe.js"; // স্টোর ইম্পোর্ট

const CheckoutPage = () => {
  const { cart } = useStore(); // স্টোর থেকে কার্ট ডাটা আনা হলো

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-[1170px] mx-auto py-16 px-4 font-sans text-black">
      <h1 className="text-3xl font-medium mb-10">Billing Details</h1>

      <div className="flex flex-col lg:flex-row gap-20">
        {/* বাম দিকের ফরম (আগের মতোই থাকবে) */}
        <div className="flex-1 flex flex-col gap-6">
           {/* Form Inputs... */}
        </div>

        {/* ডান দিকের অর্ডার সামারি (এখন ডাইনামিক) */}
        <div className="lg:w-[450px] flex flex-col gap-8">
          
          {/* কার্টের প্রোডাক্টগুলো লুপ হচ্ছে */}
          <div className="flex flex-col gap-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.title} className="w-14 h-14 object-contain" />
                  <span className="font-medium text-sm">{item.title} x {item.quantity}</span>
                </div>
                <span className="font-medium">${item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          {/* হিসাব নিকাশ */}
          <div className="flex flex-col gap-4 border-b border-gray-300 pb-4">
            <div className="flex justify-between border-b pb-4">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-medium text-lg">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>
          </div>

          {/* পেমেন্ট এবং কুপন (আগের মতোই থাকবে) */}
          <button className="bg-[#DB4444] text-white py-4 rounded font-medium w-48 hover:bg-red-600 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
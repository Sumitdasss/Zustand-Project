import useStore from "/src/Store/Stoe.js"; // বানান চেক করুন
import { Link } from "react-router-dom";
const Wishlist = () => {
  const { wishlist, addTocart } = useStore();

  return (
    <div className="max-w-[1440px] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
      {wishlist.length === 0 ? (
        <p>আপনার উইশলিস্ট খালি!</p>
      ) : (
        wishlist.map((item) => ( // এখানে wishlist এর বদলে item দিন
          <div key={item.id} className="group">
            <div className="bg-[#F5F5F5] h-[250px] flex items-center justify-center rounded relative overflow-hidden">
              
              {/* Heart Icon to Remove */}
              <div className="absolute top-3 right-3">
                <button 
                 
                  className="bg-white p-1.5 rounded-full text-red-500 shadow-md"
                >
                  {/* লাল রঙের হার্ট আইকন */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </button>
              </div>

              <img src={item.image} className="w-40 h-40 object-contain" alt={item.title} />

              <button
                onClick={() => addTocart(item)}
                className="absolute bottom-0 left-0 w-full bg-black text-white py-2 translate-y-full group-hover:translate-y-0 transition"
              >
                Add To Cart
              </button>
            </div>

            <div className="mt-4">
             <Link to={`/productdetails/${item.id}`}> <h3 className="font-medium">{item.title}</h3></Link>
              <p className="text-[#DB4444] font-bold">${item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
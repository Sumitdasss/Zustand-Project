import { FaChevronUp} from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { CgShoppingCart } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import useStore from "/src/Store/Stoe.js";
import { Link } from "react-router-dom";
const Heading = () => {
const {cart,wishlist}=useStore()
const totalItems = cart.reduce(
  (total, item) => total + item.quantity,
  0
);
const totalItems2 = wishlist.length;
 
  return (
   <>
   <div className="bg-black">
    <div className=" max-w-[1440px] m-auto ">
<div className="flex justify-between items-center h-15">
    <div className="hidden md:block w-[30%]"></div>
<div className="flex w-[60%]">
 <p className="text-white text-sm font-normal">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
<a href="" className="text-white text-sm font-medium pl-4">ShopNow</a>   
</div>
<div className="">
    <button className="text-white text-[18px font-medium flex ">English <FaChevronUp className="ml-3" /></button>
</div>
</div>
    </div>
   </div>
<div className="bg-white border-b border-gray-200">
    <div className=" max-w-[1440px] m-auto ">
       <nav className="flex items-center justify-between h-[80px]  bg-white">

  <div className="text-2xl font-bold">
    Exclusive
  </div>


  <ul className="flex space-x-8 text-base">
    <li><a href="/" className="focus:border-b-2 border-black hover:text-gray-600 transition pb-1">Home</a></li>
    <li><a href="" className="focus:border-b-2 border-black hover:text-gray-600 transition pb-1">Shop</a></li>
    <li><a href="#" className="hover:text-gray-600 transition focus:border-b-2 border-black pb-1">Contact</a></li>
    <li><a href="#" className="hover:text-gray-600 transition focus:border-b-2 border-black pb-1">About</a></li>
    <li><a href="#" className="hover:text-gray-600 transition focus:border-b-2 border-black pb-1">Sign Up</a></li>
  </ul>


  <div className="flex items-center space-x-6">

    <div className="relative flex items-center bg-gray-100 px-3 py-2 rounded">
      <input 
        type="text" 
        placeholder="What are you looking for?" 
        className="bg-transparent text-sm outline-none w-48"
      />
      <FaMagnifyingGlass className="text-gray-500" />
    </div>


    <div className="flex items-center space-x-4">
      <button className="hover:text-gray-600 transition cursor-pointer relative">
      <Link to="/wishlist"> <IoMdHeartEmpty className="text-[21px]"/></Link>
<div className=" absolute top-[-7px] right-[-7px] w-4 h-4 rounded-full bg-red-600"><p className="text-white text-[10px] font-bold"> {totalItems2}</p></div>

      </button>
      <button className="hover:text-gray-600 cursor-pointer relative  transition">
       <Link to="/shop"><CgShoppingCart className="text-[21px]" /></Link> 
        <div className=" absolute top-[-7px] right-[-7px] w-4 h-4 rounded-full bg-red-600"><p className="text-white text-[10px] font-bold"> {totalItems}</p></div>
      </button>
    </div>
  </div>
</nav>
    </div>
</div>


   </>
  )
}

export default Heading
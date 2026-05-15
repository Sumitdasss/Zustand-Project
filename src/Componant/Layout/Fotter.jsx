

const Fotter = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-6 px-10 font-sans">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
    

    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Exclusive</h2>
      <h3 className="text-xl font-medium">Subscribe</h3>
      <p className="text-sm">Get 10% off your first order</p>
      <div className="relative max-w-[200px]">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="bg-transparent border border-white rounded py-2 px-3 text-sm w-full focus:outline-none"
        />
        <button className="absolute right-3 top-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>


    <div className="space-y-4">
      <h2 className="text-xl font-bold">Support</h2>
      <p className="text-sm leading-relaxed">
        111 Bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh.
      </p>
      <p className="text-sm">exclusive@gmail.com</p>
      <p className="text-sm">+88015-88888-9999</p>
    </div>


    <div className="space-y-4">
      <h2 className="text-xl font-bold">Account</h2>
      <ul className="space-y-3 text-sm">
        <li><a href="#" className="hover:underline">My Account</a></li>
        <li><a href="#" className="hover:underline">Login / Register</a></li>
        <li><a href="#" className="hover:underline">Cart</a></li>
        <li><a href="#" className="hover:underline">Wishlist</a></li>
        <li><a href="#" className="hover:underline">Shop</a></li>
      </ul>
    </div>


    <div className="space-y-4">
      <h2 className="text-xl font-bold">Quick Link</h2>
      <ul className="space-y-3 text-sm">
        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
        <li><a href="#" className="hover:underline">Terms Of Use</a></li>
        <li><a href="#" className="hover:underline">FAQ</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </div>

   
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Download App</h2>
      <p className="text-[10px] text-gray-400">Save $3 with App New User Only</p>
      <div className="flex items-center space-x-2">
      
        <div className="bg-white p-1">
          <div className="w-16 h-16 bg-black"></div> 
        </div>
        <div className="flex flex-col space-y-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-24"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="w-24 border border-gray-500 rounded"/>
        </div>
      </div>
 
      <div className="flex space-x-6 pt-2">
        <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
        <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>

  </div>


  <div className="mt-16 border-t border-gray-800 pt-4 text-center text-gray-600 text-sm">
    <p>&copy; Copyright Rimel 2022. All right reserved</p>
  </div>
</footer>
  )
}

export default Fotter
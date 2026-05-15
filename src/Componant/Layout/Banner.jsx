import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronUp} from "react-icons/fa";
import Slider from "react-slick";
const SlickSlider = Slider.default ? Slider.default : Slider;
const Banner = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
      autoplay: true,
      prevArrow:false,
      nextArrow: false,
  };
  return (
    <div className="max-w-[1440px] mx-auto   flex flex-col md:flex-row  h-[450px] ">
  

  <div className="w-full md:w-1/4 pt-10 border-r border-gray-200 pr-10 hidden md:block">
    <ul className="space-y-4 text-base font-medium text-black">
      <li className="flex items-center justify-between cursor-pointer hover:text-gray-500 transition">
        Woman's Fashion <FaChevronUp/>
      </li>
      <li className="flex items-center justify-between cursor-pointer hover:text-gray-500 transition">
        Men's Fashion <FaChevronUp />
      </li>
      <li className="cursor-pointer hover:text-gray-500 transition">Electronics</li>
      <li className="cursor-pointer hover:text-gray-500 transition">Home & Lifestyle</li>
      <li className="cursor-pointer hover:text-gray-500 transition">Medicine</li>
      <li className="cursor-pointer hover:text-gray-500 transition">Sports & Outdoor</li>
      <li className="cursor-pointer hover:text-gray-500 transition">Baby's & Toys</li>
      <li className="cursor-pointer hover:text-gray-500 transition">Groceries & Pets</li>
      <li className="cursor-pointer hover:text-gray-500 transition">Health & Beauty</li>
    </ul>
  </div>


  <div className="w-full md:w-3/4 mt-10 ml-10">
    
    
     <SlickSlider  {...settings}>

 <div>
        <a href="#"><img src="https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg" alt="Banner 1" className="w-full h-85 object-cover rounded"/></a>
      </div>
      <div>
        <a href="#"><img src="https://images.pexels.com/photos/10054188/pexels-photo-10054188.jpeg" alt="Banner 1" className="w-full h-85 object-cover rounded"/></a>
      </div>
      <div>
        <a href="#"><img src="https://images.pexels.com/photos/12920900/pexels-photo-12920900.jpeg" alt="Banner 1" className="w-full h-85 object-cover rounded"/></a>
      </div>
      <div>
        <a href="#"><img src="https://images.pexels.com/photos/30726378/pexels-photo-30726378.jpeg" alt="Banner 1" className="w-full h-85 object-cover rounded"/></a>
      </div>
      <div>
        <a href="#"><img src="https://images.pexels.com/photos/6804613/pexels-photo-6804613.jpeg" alt="Banner 1" className="w-full h-85 object-cover rounded"/></a>
      </div>
      <div>
        <a href="#"><img src="https://images.pexels.com/photos/15592023/pexels-photo-15592023.jpeg" alt="Banner 1" className="w-full h-85 object-cover rounded"/></a>
      </div>
     </SlickSlider>
  </div>

</div>
  )
}

export default Banner
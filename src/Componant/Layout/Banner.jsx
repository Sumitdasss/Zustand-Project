import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronUp} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Banner = () => {
 
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
    
    
     <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
     
    >
      <SwiperSlide>
        <a href="#">
          <img
            src="https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg"
            alt="Banner 1"
            className="w-full h-85 object-cover rounded"
          />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#">
          <img
            src="https://images.pexels.com/photos/10054188/pexels-photo-10054188.jpeg"
            alt="Banner 2"
            className="w-full h-85 object-cover rounded"
          />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#">
          <img
            src="https://images.pexels.com/photos/12920900/pexels-photo-12920900.jpeg"
            alt="Banner 3"
            className="w-full h-85 object-cover rounded"
          />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#">
          <img
            src="https://images.pexels.com/photos/30726378/pexels-photo-30726378.jpeg"
            alt="Banner 4"
            className="w-full h-85 object-cover rounded"
          />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#">
          <img
            src="https://images.pexels.com/photos/6804613/pexels-photo-6804613.jpeg"
            alt="Banner 5"
            className="w-full h-85 object-cover rounded"
          />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#">
          <img
            src="https://images.pexels.com/photos/15592023/pexels-photo-15592023.jpeg"
            alt="Banner 6"
            className="w-full h-85 object-cover rounded"
          />
        </a>
      </SwiperSlide>
    </Swiper>
  </div>

</div>
  )
}

export default Banner
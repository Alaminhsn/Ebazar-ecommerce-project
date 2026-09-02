// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

// import required modules
import { Pagination,Navigation ,Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={8}
        spaceBetween={20}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination,Navigation, Autoplay]}
        className="mySwiper container"
      >
        <SwiperSlide><img src="image12.png" className=''></img></SwiperSlide>
        <SwiperSlide><img src="image13.png"></img></SwiperSlide>
        <SwiperSlide><img src="image14.png"></img></SwiperSlide>
        <SwiperSlide><img src="image15.png"></img></SwiperSlide>
        <SwiperSlide><img src="image16.png"></img></SwiperSlide>
        <SwiperSlide><img src="image17.png"></img></SwiperSlide>      
        <SwiperSlide><img src="image18.png"></img></SwiperSlide>   
        <SwiperSlide><img src="image19.png"></img></SwiperSlide> 
        <SwiperSlide><img src="image12.png" className=''></img></SwiperSlide>
        <SwiperSlide><img src="image13.png"></img></SwiperSlide>
        <SwiperSlide><img src="image14.png"></img></SwiperSlide>
        <SwiperSlide><img src="image15.png"></img></SwiperSlide>
        <SwiperSlide><img src="image16.png"></img></SwiperSlide>
        <SwiperSlide><img src="image17.png"></img></SwiperSlide>      
        <SwiperSlide><img src="image18.png"></img></SwiperSlide>   
        <SwiperSlide><img src="image19.png"></img></SwiperSlide>   
      </Swiper>
    </>
  );
}

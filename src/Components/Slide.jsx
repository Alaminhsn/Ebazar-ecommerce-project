import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slide = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper container"
      >
        <SwiperSlide><img src="image.png" alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src="image2.png" alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src="image3.png" alt="Slide 3" /></SwiperSlide>
        <SwiperSlide><img src="image4.png" alt="Slide 4" /></SwiperSlide>
        <SwiperSlide><img src="image5.png" alt="Slide 5" /></SwiperSlide>
        <SwiperSlide><img src="image6.png" alt="Slide 6" /></SwiperSlide>
        <SwiperSlide><img src="image7.png" alt="Slide 7" /></SwiperSlide>
        <SwiperSlide><img src="image8.png" alt="Slide 8" /></SwiperSlide>
        <SwiperSlide><img src="image9.png" alt="Slide 9" /></SwiperSlide>
        <SwiperSlide><img src="image10.png" alt="Slide 10"/></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slide;

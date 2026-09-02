import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

// import required module
import { Navigation} from 'swiper/modules';
import ProductItem from './ProductItem';
const ProductSlider = (props) => {
  return (
    <>
    <div className='productSlider'>
       <Swiper
        slidesPerView={props.items}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper container"
      >
        <SwiperSlide><ProductItem /> </SwiperSlide>
        <SwiperSlide><ProductItem /> </SwiperSlide>
        <SwiperSlide><ProductItem /> </SwiperSlide>
        <SwiperSlide><ProductItem /> </SwiperSlide>
        <SwiperSlide><ProductItem /> </SwiperSlide>
        <SwiperSlide><ProductItem /> </SwiperSlide>
        <SwiperSlide><ProductItem /> </SwiperSlide>
        <SwiperSlide><ProductItem /> </SwiperSlide>
        <SwiperSlide><ProductItem /> </SwiperSlide>
      </Swiper>
      </div>
      </>
  )
}

export default ProductSlider

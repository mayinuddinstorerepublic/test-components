import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from '../../assets/images/Amara.png'
import img2 from '../../assets/images/Aven.png'
import img3 from '../../assets/images/Circle.png'
import img4 from '../../assets/images/Kyan.png'
import img5 from '../../assets/images/Treva.png'

const Home = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="..." /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="..." /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="..." /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="..." /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="..." /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="..." /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;

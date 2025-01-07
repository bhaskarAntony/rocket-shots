import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './style.css';

function Social() {
  return (
    <div>
        <div className="row">
            <div className="col-md-6">
            <Swiper
        modules={[Navigation, EffectCoverflow, Autoplay]}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 1000,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        navigation
      >
        <SwiperSlide>
          <img
            src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/10.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/11.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/12.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
            </div>
        </div>
    </div>
  );
}

export default Social;

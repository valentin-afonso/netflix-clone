'use client'

import Card from "./Card"
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export default function Results({results}: any) {
  register();
  return (
    <div>
        <Swiper
        spaceBetween={5}
        slidesPerView={2}
        navigation={true} 
        modules={[Navigation]} 
        breakpoints={{
          500: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1084: {
            slidesPerView: 5,
          },
          1355: {
            slidesPerView: 6,
          },
        }}
        className="w-full"
      > 
        {
            results.map((result: any) => {
                return(
                  <SwiperSlide key={result.id}>
                    <Card result={result} />
                  </SwiperSlide>
                  
                )
            })
        }
        </Swiper>
    </div>
  )
}

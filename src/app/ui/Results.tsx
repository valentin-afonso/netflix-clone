'use client'

import Card from "./Card"
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Results({results}: any) {
  register();
  return (
    <div>
        <Swiper
        spaceBetween={20}
        slidesPerView={5}
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

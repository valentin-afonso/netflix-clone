"use client";

import CardTop from "./CardTop";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function ResultsTop({ results }: any) {
  register();
  return (
    <>
      <Swiper
        spaceBetween={80}
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
      >
        {results.map((result: any, index: number) => {
          return (
            <SwiperSlide key={result.id}>
              <div className="relative w-full flex">
                <div className="absolute left-0">
                  <p className="rating_text text-9xl text-black ">
                    {index + 1}
                  </p>
                </div>
                <CardTop result={result} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

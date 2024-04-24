"use client";

import Card from "./Card";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function Results({ results }: any) {
  register();

  return (
    <>
      <Swiper
        spaceBetween={5}
        slidesPerView={"auto"}
        navigation={true}
        modules={[Navigation]}
        className="slider_results overflow-visible w-full"
      >
        {results.map((result: any) => {
          return (
            <SwiperSlide key={result.id}>
              <Card result={result} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

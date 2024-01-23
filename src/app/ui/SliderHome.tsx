"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Image from "next/image";
import ContentTitle from "./ContentTitle";

export default function SliderHome() {
  return (
    <>
      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 8000 }}
        modules={[EffectFade, Autoplay]}
        effect="fade"
        className="w-full h-full relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-2/6 before:bg-gradient-to-t before:from-dark before:to-transparent before:z-2"
      >
        <SwiperSlide>
          <Image
            src="/img-blade-runner-1.webp"
            width={1920}
            height={1070}
            alt="cover"
            className="w-full h-full object-cover object-bottom brightness-75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img-blade-runner-2.webp"
            width={1920}
            height={1070}
            alt="cover"
            className="w-full h-full object-cover object-bottom brightness-75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img-blade-runner-3.webp"
            width={1920}
            height={1070}
            alt="cover"
            className="w-full h-full object-cover object-bottom brightness-75"
          />
        </SwiperSlide>
      </Swiper>
      <ContentTitle />
    </>
  );
}

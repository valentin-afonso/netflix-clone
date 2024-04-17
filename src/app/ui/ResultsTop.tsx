"use client";

import CardTop from "./CardTop";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TopOne from "@/app/ui/svg/TopOne";
import TopTwo from "@/app/ui/svg/TopTwo";
import TopThree from "@/app/ui/svg/TopThree";
import TopFour from "@/app/ui/svg/TopFour";
import TopFive from "@/app/ui/svg/TopFive";
import TopSix from "@/app/ui/svg/TopSix";
import TopSeven from "@/app/ui/svg/TopSeven";
import TopHeight from "@/app/ui/svg/TopHeight";
import TopNine from "@/app/ui/svg/TopNine";
import TopTen from "@/app/ui/svg/TopTen";

export default function ResultsTop({ results }: any) {
  register();
  function getSvgRank(rank: any) {
    switch (rank) {
      case 1:
        return <TopOne />;
        break;
      case 2:
        return <TopTwo />;
        break;
      case 3:
        return <TopThree />;
        break;
      case 4:
        return <TopFour />;
        break;
      case 5:
        return <TopFive />;
        break;
      case 6:
        return <TopSix />;
        break;
      case 7:
        return <TopSeven />;
        break;
      case 8:
        return <TopHeight />;
        break;
      case 9:
        return <TopNine />;
        break;
      case 10:
        return <TopTen />;
        break;
    }
  }
  return (
    <>
      <Swiper
        spaceBetween={100}
        // slidesPerView={2}
        slidesPerView={"auto"}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          500: {
            spaceBetween: 150,
          },
        }}
        className="slider_results_top"
      >
        {results.map((result: any, index: number) => {
          return (
            <SwiperSlide key={result.id}>
              <div className="relative w-full h-full flex">
                <div className="absolute left-0 svg_rank h-full">
                  {getSvgRank(index + 1)}
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

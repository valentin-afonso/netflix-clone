"use client";

import Card from "./Card";
import Popup from "@/app/ui/Popup";
import { useState } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

export default function Results({ results }: any) {
  // console.log(results);
  register();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={5}
        // slidesPerView={2}
        slidesPerView={"auto"}
        navigation={true}
        modules={[Navigation]}
        /*
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
        */
        className="slider_results overflow-visible w-full"
      >
        {results.map((result: any) => {
          return (
            <SwiperSlide key={result.id}>
              <Card
                result={result}
                setSelectedId={setSelectedId}
                setSelectedMovie={setSelectedMovie}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: "-50%", x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, scale: 0, y: "-50%", x: "-50%" }}
            className="popup fixed top-1/2 left-1/2 w-full h-screen max-h-screen sm:h-max sm:max-h-[98vh] sm:w-[600px] lg:w-140"
          >
            <Popup result={selectedMovie} setSelectedId={setSelectedId} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full z-20 bg-black/[.8]"
            onClick={() => setSelectedId(null)}
          ></motion.div>
        )}
        s
      </AnimatePresence>
    </>
  );
}

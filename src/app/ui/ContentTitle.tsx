"use client";

import { useState } from "react";
import Image from "next/image";
import Title from "@/app/ui/Title";
import Button from "@/app/ui/Button";
import Popup from "@/app/ui/Popup";
import { motion, AnimatePresence } from "framer-motion";

export default function ContentTitle() {
  const [selectedId, setSelectedId] = useState(null);
  const result = {
    id: 1,
    title: "Blade runner 2049",
    backdrop_path: "",
    overview:
      "In 2049, society is destabilized by numerous tensions between humans and bio-engineered slaves. Officer K is a blade runner, part of an elite intervention force tasked with finding and eliminating those who defy human orders. When he uncovers a long-buried secret with the potential to alter the world, the highest authorities decide that he, in turn, must be hunted down and eliminated. He must find Rick Deckard.",
    vote_average: 9,
    vote_count: 625,
    original_language: "en",
    adult: false,
    budget: 35000000,
    revenue: 122926919,
    genres: [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 53,
        name: "Thriller",
      },
      {
        id: 18,
        name: "Drama",
      },
    ],
    production_companies: [
      {
        id: 14,
        logo_path: "/m6AHu84oZQxvq7n1rsvMNJIAsMu.png",
        name: "Miramax",
        origin_country: "US",
      },
      {
        id: 118475,
        logo_path: null,
        name: "Cedar Park Entertainment",
        origin_country: "US",
      },
      {
        id: 218150,
        logo_path: null,
        name: "Punch Palace Productions",
        origin_country: "GB",
      },
    ],
    status: "Released",
    tagline: "Expose the corruption. Protect the hive.",
  };
  return (
    <>
      <div className="absolute bottom-1/4 left-9 z-1">
        <Image
          src="/logo-blade-runner.webp"
          width={868}
          height={417}
          alt="cover"
          className="w-56"
        />
        <Title>Welcome on my Netflix app</Title>
        <p className="mt-3 mb-3 max-w-lg">
          Movie lover? This app is designed for you! Find your favorite films,
          discover the latest releases, or keep an eye on upcoming movies.
        </p>
        <Button setSelectedId={setSelectedId}>More information</Button>
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: "-50%", x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, scale: 0, y: "-50%", x: "-50%" }}
            className="popup fixed top-1/2 left-1/2 w-140"
          >
            <Popup result={result} setSelectedId={setSelectedId} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full z-20 bg-dark/[.8]"
            onClick={() => setSelectedId(null)}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

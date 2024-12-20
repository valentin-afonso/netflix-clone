"use client";

import { useState } from "react";
import Image from "next/image";
import Title from "@/app/ui/Title";
import Button from "@/app/ui/Button";
import Popup from "@/app/ui/Popup";
import { motion, AnimatePresence } from "framer-motion";

export default function ContentTitle() {
  // const [selectedId, setSelectedId] = useState(null);
  const result = {
    id: 1,
    title: "Blade runner 2049",
    backdrop_path: "",
    overview:
      "In 2049, society is destabilized by numerous tensions between humans and bio-engineered slaves. Officer K is a blade runner, part of an elite intervention force tasked with finding and eliminating those who defy human orders. When he uncovers a long-buried secret with the potential to alter the world, the highest authorities decide that he, in turn, must be hunted down and eliminated. He must find Rick Deckard.",
    vote_average: 9,
    vote_count: 625,
    original_language: "en",
    release_date: "04-10-2017",
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
  /*
  const handleClosePopup = () => {
    document.querySelector("body")?.classList.remove("popup_open");
    setSelectedId(null);
  };
  */

  return (
    <>
      <div className="absolute bottom-[35px] left-4 z-1 sm:left-9 sm:bottom-1/4">
        <Image
          src="/logo-blade-runner.webp"
          width={868}
          height={417}
          alt="cover"
          className="w-20 sm:w-56"
        />
        <Title>Welcome on my Netflix app</Title>
        <p className="text-xs mt-3 mb-3 max-w-lg pr-4 sm:text-base">
          Movie lover? This app is designed for you! Find your favorite films,
          discover the latest releases, or keep an eye on upcoming movies.
        </p>
        <Button>More information</Button>
      </div>
    </>
  );
}

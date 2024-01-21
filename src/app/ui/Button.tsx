"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Popup from "@/app/ui/Popup";

export default function Button({ children }: { children: React.ReactNode }) {
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
  };
  return (
    <>
      <button
        className="px-8 py-1 bg-btn-secondary rounded-s hover:bg-btn-secondary-hover"
        onClick={() => setSelectedId(result.id)}
      >
        {children}
      </button>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: "-50%", x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, scale: 0, y: "-50%", x: "-50%" }}
            className="popup fixed top-1/2 left-1/2 z-50 w-140"
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

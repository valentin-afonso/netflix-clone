"use client";

import { useState } from "react";
import Image from "next/image";
import Title from "@/app/ui/Title";
import Button from "@/app/ui/Button";
import Popup from "@/app/ui/Popup";
import { motion, AnimatePresence } from "framer-motion";

export default function ContentTitle() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
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
        <Button>More information</Button>
      </div>
    </>
  );
}

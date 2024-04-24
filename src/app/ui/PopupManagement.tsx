"use client";
import { useThemeContext } from "@/providers/popup-provider";
import { motion, AnimatePresence } from "framer-motion";
import Popup from "@/app/ui/Popup";

export default function PopupManagement() {
  const { selectedId, setSelectedId } = useThemeContext();

  const handleClosePopup = () => {
    document.querySelector("body")?.classList.remove("popup_open");
    setSelectedId(null);
  };

  return (
    <>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: "-50%", x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, scale: 0, y: "-50%", x: "-50%" }}
            className="popup fixed top-1/2 left-1/2 w-full h-screen max-h-screen sm:h-max sm:max-h-[98vh] sm:w-[600px] lg:w-140"
          >
            <Popup movieId={selectedId} setSelectedId={setSelectedId} />
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
            onClick={() => handleClosePopup()}
          ></motion.div>
        )}
        s
      </AnimatePresence>
    </>
  );
}

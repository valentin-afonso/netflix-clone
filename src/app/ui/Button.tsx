"use client";
import { useThemeContext } from "@/providers/popup-provider";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: { children: React.ReactNode }) {
  const { setSelectedId } = useThemeContext();
  const handlePopup = () => {
    document.querySelector("body")?.classList.add("popup_open");
    setSelectedId(1);
  };

  return (
    <>
      <button
        className="text-xs px-4 py-1 bg-btn-secondary rounded-s hover:bg-btn-secondary-hover sm:text-base sm:px-8 "
        // onClick={() => setSelectedId(1)}
        onClick={() => handlePopup()}
      >
        {children}
      </button>
    </>
  );
}

"use client";

interface ButtonProps {
  children: React.ReactNode;
  setSelectedId: any;
}

export default function Button({ children, setSelectedId }: ButtonProps) {
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

"use client";

interface ButtonProps {
  children: React.ReactNode;
  setSelectedId: any;
}

export default function Button({ children, setSelectedId }: ButtonProps) {
  return (
    <>
      <button
        className="px-8 py-1 bg-btn-secondary rounded-s hover:bg-btn-secondary-hover"
        onClick={() => setSelectedId(1)}
      >
        {children}
      </button>
    </>
  );
}

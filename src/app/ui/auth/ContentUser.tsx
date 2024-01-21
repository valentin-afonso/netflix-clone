"use client";

import { useState } from "react";
import { LogoutButton } from "./LogoutButton";
import ChevronDown from "@/app/ui/svg/chevronDown";

export default function ContentUser(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContainer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div onClick={toggleContainer}>
        <ChevronDown />
      </div>

      <div
        className={`w-max container absolute p-5 right-1 top-20 bg-header ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <p className="text-sm font-medium text-slate-900">{props.username}</p>
        <p className="text-sm text-slate-500">{props.email}</p>
        <p className="text-sm text-slate-500">{props.id}</p>
        <LogoutButton />
      </div>
    </>
  );
}

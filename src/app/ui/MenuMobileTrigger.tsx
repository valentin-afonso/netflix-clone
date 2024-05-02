"use client";

import { useState } from "react";
import MenuTrigger from "@/app/ui/svg/MenuTrigger";
import MenuTriggerClose from "@/app/ui/svg/MenuTriggerClose";
import { useThemeContext } from "@/providers/sidebar-provider";

export default function MenuMobileTrigger() {
  const { isOpenSidebar, setIsOpenSidebar } = useThemeContext();
  const [clicked, setClicked] = useState(false);
  const handleMenuMobile = (e: any) => {
    setClicked(!clicked);
    setIsOpenSidebar(!clicked);
  };
  return (
    <>
      <div
        className="block sm:hidden cursor-pointer"
        onClick={handleMenuMobile}
      >
        {isOpenSidebar ? <MenuTriggerClose /> : <MenuTrigger />}
      </div>
    </>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useThemeContext } from "@/providers/sidebar-provider";
import { useState } from "react";

export default function NavLinksSidebar({ name, href }: any) {
  const { setIsOpenSidebar } = useThemeContext();
  const handleMenuMobile = (e: any) => {
    setIsOpenSidebar(false);
  };

  const pathname = usePathname();
  const isActive = pathname === href;
  const linkClassName = isActive ? "active opacity-1" : "opacity-45";
  return (
    <>
      <Link
        href={href}
        className={`px-2 py-1 block text-sm ${linkClassName}`}
        onClick={handleMenuMobile}
      >
        {name}
      </Link>
    </>
  );
}

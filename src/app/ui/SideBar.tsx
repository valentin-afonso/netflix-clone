"use client";

import NavLinks from "@/app/ui/header/NavLinks";
import { useThemeContext } from "@/providers/sidebar-provider";

export default function SideBar() {
  const { isOpenSidebar } = useThemeContext();

  return (
    <div
      className={`fixed h-full left-0 top-0 w-80 m-w-[100vw] bg-dark transition-transform pt-20 z-[8] ${
        isOpenSidebar
          ? "transform translate-x-0"
          : "transform -translate-x-full"
      }`}
    >
      <nav>
        <ul className="flex flex-col gap-2">
          <li>
            <NavLinks name="Home" href="/" />
          </li>
          <li>
            <NavLinks name="Wishlist" href="/wishlist" />
          </li>
          <li>
            <NavLinks name="Favourites" href="/favourites" />
          </li>
          <li>
            <NavLinks name="About" href="/about" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

"use client";

import NavLinksSidebar from "@/app/ui/header/NavLinksSidebar";
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
        <ul className="flex flex-col gap-1">
          <li>
            <NavLinksSidebar name="Home" href="/" />
          </li>
          <li>
            <NavLinksSidebar name="Wishlist" href="/wishlist" />
          </li>
          <li>
            <NavLinksSidebar name="Favourites" href="/favourites" />
          </li>
          <li>
            <NavLinksSidebar name="About" href="/about" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

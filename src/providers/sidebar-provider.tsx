"use client";

import { createContext, useContext, useState } from "react";

interface ThemeContextType {
  isOpenSidebar: any;
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<any>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  isOpenSidebar: false,
  setIsOpenSidebar: () => {},
});

export default function SidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const toggleTheme = () => {
    setIsOpenSidebar(!isOpenSidebar);
    // document.documentElement.classList.toggle("dark");
  };
  return (
    <ThemeContext.Provider value={{ isOpenSidebar, setIsOpenSidebar }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useThemeContext = () => useContext(ThemeContext);

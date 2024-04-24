"use client";

import { createContext, useContext, useState } from "react";

interface ThemeContextType {
  selectedId: any;
  setSelectedId: React.Dispatch<React.SetStateAction<any>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  selectedId: null,
  setSelectedId: () => {},
});

export default function PopupProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <ThemeContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useThemeContext = () => useContext(ThemeContext);

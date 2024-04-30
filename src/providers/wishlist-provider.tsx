"use client";

import { createContext, useContext, useState } from "react";

interface ThemeContextType {
  refreshWishlist: any;
  setRefreshWishlist: React.Dispatch<React.SetStateAction<any>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  refreshWishlist: false,
  setRefreshWishlist: () => {},
});

export default function WishlistProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [refreshWishlist, setRefreshWishlist] = useState(false);

  return (
    <ThemeContext.Provider value={{ refreshWishlist, setRefreshWishlist }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useThemeContext = () => useContext(ThemeContext);

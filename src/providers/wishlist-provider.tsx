"use client";

import { createContext, useContext, useState } from "react";

interface ThemeContextType {
  moviesIdInWishlist: any;
  setMoviesIdInWishlist: React.Dispatch<React.SetStateAction<any>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  moviesIdInWishlist: false,
  setMoviesIdInWishlist: () => {},
});

export default function WishlistProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [moviesIdInWishlist, setMoviesIdInWishlist] = useState(false);

  return (
    <ThemeContext.Provider
      value={{ moviesIdInWishlist, setMoviesIdInWishlist }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export const useThemeContext = () => useContext(ThemeContext);

"use client";

import TitleSecond from "./TitleSecond";
import WishlistMoviesIntern from "./WishlistMoviesIntern";
import SkeletonMoviesIntern from "@/app/ui/SkeletonMoviesIntern";
import { useThemeContext } from "@/providers/wishlist-provider";
import { useState, useEffect } from "react";

export default function WishlistIntern() {
  const { refreshWishlist } = useThemeContext();
  const [movies, setMovies] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resMoviesWishlist = await fetch("api/wishlistMovies", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const movies = await resMoviesWishlist.json();
        if (movies) {
          setMovies(movies);
        }
      } catch (error) {
        console.log("Error during fetching wishlist: ", error);
      }
    };

    fetchData();
  }, [refreshWishlist]);

  if (movies === null) {
    return (
      <>
        <TitleSecond>Wishlist</TitleSecond>
        <SkeletonMoviesIntern />
      </>
    );
  }

  return (
    <>
      <TitleSecond>Wishlist</TitleSecond>
      <WishlistMoviesIntern movies={movies.movie} />
    </>
  );
}

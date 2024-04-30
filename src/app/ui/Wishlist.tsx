"use client";

import TitleSecond from "./TitleSecond";
import WishlistMovies from "./WishlistMovies";
import SkeletonSliderMovies from "@/app/ui/SkeletonSliderMovies";
import { useThemeContext } from "@/providers/wishlist-provider";
import { useState, useEffect } from "react";

export default function Wishlist() {
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
    return <SkeletonSliderMovies />;
  }

  return (
    <>
      <TitleSecond>Wishlist</TitleSecond>
      <WishlistMovies movies={movies.movie} />
    </>
  );
}

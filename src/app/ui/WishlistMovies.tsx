"use client";
import { useState, useEffect } from "react";

export default function WishlistMovies({ movies }: any) {
  const [results, setResults] = useState<any[]>([]);
  /*
  useEffect(() => {
    const fetchMovies = async () => {
      if (movies) {
        const promises = movies.map(async (movie: any) => {
          const { movieID } = movie;
          const res = await fetch(`/api/movie?id=${movieID}`);
          const data = await res.json();
          return data;
        });

        const moviesData = await Promise.all(promises);
        setResults(moviesData);
      }
    };

    fetchMovies();
  }, [movies]);
  console.log(results);
  console.log(movies);
  */
  return <div>WishlistMovies</div>;
}

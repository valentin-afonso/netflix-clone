"use client";
import { useState, useEffect } from "react";
import Results from "./Results";

export default function WishlistMovies({ movies }: any) {
  const [results, setResults] = useState<any[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      if (movies) {
        const promises = movies.map(async (movie: any) => {
          const { movieID } = movie;
          const res = await fetch(`/api/movie?id=${movieID}`);
          const data = await res.json();
          return data.data;
        });

        const moviesData = await Promise.all(promises);
        setResults(moviesData);
      }
    };

    fetchMovies();
  }, [movies]);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}

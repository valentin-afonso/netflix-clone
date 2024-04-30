import { useState, useEffect } from "react";
import Results from "./Results";

async function getWishlistMovies(movies: any) {
  const promises = movies.map(async (movie: any) => {
    const { movieID } = movie;
    const res = await fetch(`/api/movie?id=${movieID}`);
    const data = await res.json();
    return data.data;
  });
  const moviesData = await Promise.all(promises);
  return moviesData;
}

export default function WishlistMovies({ movies }: any) {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (movies) {
          const moviesData = await getWishlistMovies(movies);
          setResults(moviesData);
        }
      } catch (error) {
        console.log("Error during fetching wishlist movies: ", error);
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

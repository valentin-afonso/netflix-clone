import { useState, useEffect } from "react";
import Card from "./Card";

async function getWishlistMovies({ movies }: any) {
  const promises = movies.map(async (movie: any) => {
    const { movieID } = movie;
    const res = await fetch(`/api/movie?id=${movieID}`);
    const data = await res.json();
    return data.data;
  });
  const moviesData = await Promise.all(promises);
  return moviesData;
}

export default function WishlistMoviesIntern(movies: any) {
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
    <>
      <ul className="flex gap-x-[5px] sm:gap-y-8 gap-y-2 flex-wrap overflow-hidden">
        {results?.map((result: any) => {
          return (
            <li
              key={result.id}
              className="min-w-[0px] max-w-[47%] sm:min-w-[293px] sm:max-w-[293px] h-[105px] sm:h-[165px] shadow-xl rounded"
            >
              <Card result={result} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

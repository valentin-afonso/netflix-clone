import Results from "./Results";

const API_KEY = process.env.IMDB_KEY;

export default async function UpcomingMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&languege=en-US&page=1`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;
  return (
    <>
      <Results results={results} />
    </>
  );
}

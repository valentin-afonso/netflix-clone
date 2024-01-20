import ResultsTop from './ResultsTop'

const API_KEY = process.env.IMDB_KEY

export default async function TopRatedMovies() {
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&languege=en-US&page=1&per_page=10`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
 
    const data = await res.json()
    const results = data.results
    const movies = results.slice(0, 10);
  return (
    <>
        <ResultsTop results={movies} />
    </>
  )
}

import { usePopularMovies } from '@/app/api/imdb/movies'
import Results from './Results'
import { MoviesResponse } from '@/app/api/model/getMoviesParams'

const API_KEY = process.env.IMDB_KEY

export default async function PopularMovies() {
 
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&languege=en-US&page=1`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
 
    const data = await res.json()
    const results = data.results
   // const results = usePopularMovies();

    // const { movies, isLoading, error, mutate } = usePopularMovies();

    return (
        <div>
           <Results results={results} />
        </div>
    )
}

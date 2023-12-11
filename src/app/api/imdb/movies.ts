import useSWR from 'swr'
import axios, { AxiosRequestConfig } from 'axios';
import { MoviesResponse } from '@/app/api/model/getMoviesParams'


const API_KEY = process.env.IMDB_KEY

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);

/**
 * get movies list
 * @summary Get movies list
 */
export const usePopularMovies = () => {
    
    // useSWR(id ? `/api/user/${id}` : null, fetcher)
    
    
    /*
    const { data, isLoading, error, mutate } = useSWR(
        'movie/popular', 
        () => fetcher('movie/popular', {
            params: { language: 'en-US', page: '1' },
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
        }),
    );
    */
    const { data, isLoading, error, mutate } = useSWR<MoviesResponse>(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`, fetcher)
        console.log(data)
    // const { data, isLoading, error, mutate } = useSWR('/api/movies/popular', fetcher)
    /*
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&languege=en-US&page=1`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
 
   const data = await res.json()
   const results: MoviesResponse[] = data.results;
   return results;
   */
    return { movies: data, isLoading, error, mutate };
  };
import { SWRProvider } from '@/app/swr-provider'
import PopularMovies  from '@/app/ui/PopularMovies';
import TitleSecond from './ui/TitleSecond';
import Title from './ui/Title';

export default async function Home() {
  return (
    <main className="pt-5">
        <Title>🔥 Welcome on Netflix clone</Title>
        <TitleSecond>Popular</TitleSecond>
        <PopularMovies />
    </main>
  )
}

import { SWRProvider } from '@/app/swr-provider'
import PopularMovies  from '@/app/ui/PopularMovies';
import TitleSecond from './ui/TitleSecond';
import Title from './ui/Title';
import { getAuthSession } from "@/lib/auth";
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getAuthSession()
  
  if (!session) {
    redirect('/login')
  }

  return (
    <main className="pt-5">
        <Title>🔥 Welcome on Netflix clone</Title>
        <TitleSecond>Popular</TitleSecond>
        <PopularMovies />
    </main>
  )
}

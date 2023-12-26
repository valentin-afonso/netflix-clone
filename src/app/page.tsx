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
    <main className="pt-20">
        <Title>🔥 Welcome on Netflix clone</Title>
        <section className='pl-20'>
          <TitleSecond>Popular</TitleSecond>
          <PopularMovies />  
        </section>
         
    </main>
  )
}

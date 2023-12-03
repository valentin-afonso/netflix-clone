import { SWRProvider } from '@/app/swr-provider'
import PopularMovies  from '@/app/ui/PopularMovies';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>🔥 Welcome on Netflix clone</h1>
      
      <SWRProvider>
        <PopularMovies />
      </SWRProvider>
    </main>
  )
}

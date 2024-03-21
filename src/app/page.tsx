import SliderHome from "@/app/ui/SliderHome";
import PopularMovies from "@/app/ui/PopularMovies";
import NowPlayingMovies from "@/app/ui/NowPlayingMovies";
import UpcomingMovies from "@/app/ui/UpcomingMovies";
import TopRatedMovies from "@/app/ui/TopRatedMovies";
import TitleSecond from "./ui/TitleSecond";
import { Toaster } from "sonner";

// import { getAuthSession } from "@/lib/auth";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  // const session = await getAuthSession();
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  try {
    const resMoviesWishlist = await fetch("api/wishlistMovies");
    const { movie } = await resMoviesWishlist.json();
  } catch (error) {
    // setLoading(false);
    console.log("Error during fetching wishlist: ", error);
  }

  return (
    <main>
      <section className="section_slider h-screen mb-10">
        <SliderHome />
      </section>
      <section className="pl-20 mb-10">
        <TitleSecond>Popular</TitleSecond>
        <PopularMovies />
      </section>
      <section className="section_rating pl-36 mb-10">
        <TitleSecond>Top rated</TitleSecond>
        <TopRatedMovies />
      </section>
      <section className="pl-20 mb-10">
        <TitleSecond>Now playing</TitleSecond>
        <NowPlayingMovies />
      </section>
      <section className="pl-20 mb-10">
        <TitleSecond>Upcoming</TitleSecond>
        <UpcomingMovies />
      </section>
      <Toaster />
    </main>
  );
}

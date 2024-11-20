import SliderHome from "@/app/ui/SliderHome";
import PopularMovies from "@/app/ui/PopularMovies";
import NowPlayingMovies from "@/app/ui/NowPlayingMovies";
import UpcomingMovies from "@/app/ui/UpcomingMovies";
import TopRatedMovies from "@/app/ui/TopRatedMovies";
import Wishlist from "@/app/ui/Wishlist";
import TitleSecond from "@/app/ui/TitleSecond";
import { Toaster } from "sonner";

import PopupManagement from "@/app/ui/PopupManagement";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <main className="max-w-full overflow-x-hidden">
      <section className="section_slider h-[21rem] mb-10 relative sm:h-screen">
        <SliderHome />
      </section>
      <section className="pl-4 mb-3 sm:mb-10 sm:pl-20">
        <Wishlist />
      </section>
      <section className="pl-4 mb-3 sm:mb-10 sm:pl-20">
        <TitleSecond>Popular</TitleSecond>
        <PopularMovies />
      </section>
      <section className="section_rating pl-12 mb-3 sm:mb-10 sm:pl-36">
        <TitleSecond>Top rated</TitleSecond>
        <TopRatedMovies />
      </section>
      <section className="pl-4 mb-3 sm:mb-10 sm:pl-20">
        <TitleSecond>Now playing</TitleSecond>
        <NowPlayingMovies />
      </section>
      <section className="pl-4 mb-3 sm:mb-10 sm:pl-20">
        <TitleSecond>Upcoming</TitleSecond>
        <UpcomingMovies />
      </section>
      <PopupManagement />
      <Toaster />
    </main>
  );
}

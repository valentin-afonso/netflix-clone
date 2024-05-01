import Image from "next/image";
import TextSimple from "@/app/ui/TextSimple";
import Subtitle from "@/app/ui/Subtitle";
import Link from "next/link";

export default function AboutBlocInfo() {
  return (
    <div className="relative flex sm:flex-row flex-col gap-9 sm:gap-0 justify-between items-center max-w-[1280px] m-auto pt-8 sm:pt-32  px-2 sm:px-0">
      <div className="flex flex-col gap-2 max-w-144">
        <Subtitle>All your movies in one app</Subtitle>
        <TextSimple>
          Dive into the world of cinema with this app! Discover all the latest
          releases, top-rated films, current favorites, and even upcoming
          releases you won&#39;t want to miss. Whether you&#39;re a hardcore
          movie buff or just looking for a great film for your next movie night,
          this app has got you covered. Stay up-to-date with the latest movie
          trends and find your next favorite flick effortlessly!
        </TextSimple>
        <Link
          href="/"
          className="text-xs w-max px-4 py-1 bg-btn-secondary rounded-s hover:bg-btn-secondary-hover sm:text-base sm:px-8 "
        >
          Find your movies
        </Link>
      </div>
      <div className="sm:absolute relative ignore-margin-right bottom-0 before:content-[''] before:absolute before:l-0 before:bottom-0 before:w-full before:h-full before:bg-gradient-to-l before:from-dark before:to-transparent before:z-2">
        <Image
          src="/gallery-movies.webp"
          width={890}
          height={240}
          alt="image movies catalog"
          className="brightness-90"
          placeholder="blur"
          blurDataURL="/gallery-movies-low-quality.webp"
        />
      </div>
    </div>
  );
}

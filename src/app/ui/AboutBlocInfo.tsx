import Image from "next/image";

export default function AboutBlocInfo() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-2">
        <p>All your movies in one app</p>
        <p>
          Dive into the world of cinema with this app! Discover all the latest
          releases, top-rated films, current favorites, and even upcoming
          releases you won&#39t want to miss. Whether you&#39re a hardcore movie
          buff or just looking for a great film for your next movie night, this
          app has got you covered. Stay up-to-date with the latest movie trends
          and find your next favorite flick effortlessly!
        </p>
        <button className="text-xs px-4 py-1 bg-btn-secondary rounded-s hover:bg-btn-secondary-hover sm:text-base sm:px-8 ">
          Find your movies
        </button>
      </div>
      <div>
        <Image
          src="/img-bladerunner-1.webp"
          width={890}
          height={240}
          alt="image movies catalog"
          className="brightness-50"
        />
      </div>
    </div>
  );
}

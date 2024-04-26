import React from "react";
import Image from "next/image";
import Close from "@/app/ui/svg/Close";
import CirclePlus from "@/app/ui/svg/CirclePlus";
import Rating from "@/app/ui/Rating";
import ResleasedTag from "@/app/ui/ResleasedTag";
import { toast } from "sonner";

async function getMovie(movieId: any) {
  let res = await fetch(`/api/movie?id=${movieId}`);
  return res.json();
}

function getDefaultMovie() {
  const result = {
    id: 1,
    title: "Blade runner 2049",
    backdrop_path: "",
    overview:
      "In 2049, society is destabilized by numerous tensions between humans and bio-engineered slaves. Officer K is a blade runner, part of an elite intervention force tasked with finding and eliminating those who defy human orders. When he uncovers a long-buried secret with the potential to alter the world, the highest authorities decide that he, in turn, must be hunted down and eliminated. He must find Rick Deckard.",
    vote_average: 9,
    vote_count: 625,
    original_language: "en",
    release_date: "04-10-2017",
    adult: false,
    budget: 35000000,
    revenue: 122926919,
    genres: [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 53,
        name: "Thriller",
      },
      {
        id: 18,
        name: "Drama",
      },
    ],
    production_companies: [
      {
        id: 14,
        logo_path: "/m6AHu84oZQxvq7n1rsvMNJIAsMu.png",
        name: "Miramax",
        origin_country: "US",
      },
      {
        id: 118475,
        logo_path: null,
        name: "Cedar Park Entertainment",
        origin_country: "US",
      },
      {
        id: 218150,
        logo_path: null,
        name: "Punch Palace Productions",
        origin_country: "GB",
      },
    ],
    status: "Released",
    tagline: "Expose the corruption. Protect the hive.",
  };
  return result;
}

export default async function PopupContent({ movieId, setSelectedId }: any) {
  let movie = null;
  if (movieId === 1) {
    movie = getDefaultMovie();
  } else {
    let data = await getMovie(movieId);
    movie = data.data;
  }

  let img_path = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  if (movie.id === 1) {
    img_path = "/img-blade-runner-01.webp";
  }
  const genres = movie.genres;
  const companies = movie.production_companies;

  const handleClosePopup = () => {
    document.querySelector("body")?.classList.remove("popup_open");
    setSelectedId(null);
  };
  const handleWhishlist = async () => {
    try {
      if (!movieId) {
        // setLoading(false);
        return;
      }
      const resMovieExists = await fetch("api/existInWishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movieId }),
      });

      const { movie } = await resMovieExists.json();

      if (movie) {
        console.log("Movie already exists in wishlist");
        // setLoading(false);
        return;
      }

      const res = await fetch("api/addToWishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movieId,
        }),
      });
      if (res.ok) {
        toast.message("Add to your wishlist with success", {
          description: "titre du film",
        });
      } else {
        // setLoading(false);
        console.log("adding to wishlist failed.");
      }
    } catch (error) {
      // setLoading(false);
      console.log("Error during adding to wishlist: ", error);
    }

    /*
    toast.custom((t) => (
      <div className="bg-slate-200 w-[350px] border-solid border-slate-800 rounded-lg">
        <h1>Custom toast</h1>
        <button onClick={() => toast.dismiss(t)}>
          <Close />
        </button>
      </div>
    ));
    */
  };

  return (
    <>
      <div className="relative bg-dark-light before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-dark-light before:to-transparent">
        <div
          className="absolute flex items-center justify-center w-8 h-8 bg-black rounded-full top-4 right-4 sm:top-1 sm:right-1 cursor-pointer"
          onClick={() => handleClosePopup()}
        >
          <Close />
        </div>
        <Image
          src={img_path}
          width={920}
          height={500}
          alt="Picture of the author"
          className="w-full"
        />
        <p className="absolute w-full bottom-4 sm:bottom-1 left-0 pl-4 sm:pl-12 text-base sm:text-xl max-w-[90vw] sm:max-w-full">
          {movie?.title}
        </p>
        <div
          className="absolute bottom-4 right-4 cursor-pointer sm:right-12"
          onClick={() => handleWhishlist()}
        >
          <CirclePlus />
        </div>
      </div>
      <div className="relative flex flex-col justify-between gap-4 bg-dark-light p-7 sm:p-12 sm:flex-row sm:gap-0">
        <div className="flex flex-col">
          <div className="flex flex-col items-start mb-1 gap-0 sm:gap-5 sm:flex-row sm:items-center">
            <p className="font-bold">{movie?.release_date}</p>
            <Rating
              rating={movie?.vote_average}
              voteCount={movie?.vote_count}
            />
          </div>
          <ResleasedTag status={movie?.status} />
          {movie?.adult && (
            <div>
              <span>+18</span>violence
            </div>
          )}
          <p className="text-base max-w-md font-bold mb-1">{movie?.tagline}</p>
          <p className="text-base max-w-md">{movie?.overview}</p>
        </div>
        <ul>
          <li>
            <p className="text-sm">
              <span className="text-grey-medium mr-2.5">Origin</span>
              <span>{movie?.original_language}</span>
            </p>
          </li>
          <li>
            <p className="text-sm">
              <span className="text-grey-medium mr-2.5">Genre</span>
            </p>
            <ul>
              {genres?.map((genre: any) => (
                <li key={genre.id} className="text-sm">
                  {genre.name}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <p className="text-sm">
              <span className="text-grey-medium mr-2.5">Budget</span>
              <span>{movie?.budget} €</span>
            </p>
          </li>
          <li>
            <p className="text-sm">
              <span className="text-grey-medium mr-2.5">Revenue</span>
              <span>{movie?.revenue} €</span>
            </p>
          </li>
          <li>
            <p className="text-sm">
              <span className="text-grey-medium mr-2.5">Companies</span>
            </p>
            <ul>
              {companies?.map((companie: any) => (
                <li key={companie.id} className="text-sm">
                  {companie.name} ({companie.origin_country})
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

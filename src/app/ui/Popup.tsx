import Image from "next/image";
import Close from "@/app/ui/svg/Close";
import CirclePlus from "@/app/ui/svg/CirclePlus";
import { useState, useEffect } from "react";
import Skeleton from "./Skeleton";
import { Toaster, toast } from "sonner";
import Rating from "@/app/ui/Rating";
import ResleasedTag from "@/app/ui/ResleasedTag";

export default function Popup({ result, setSelectedId }: any) {
  const [loading, setLoading] = useState(true);
  const [movieId, setMovieId] = useState(result.id);
  const [userEmail, setUserEmail] = useState("");

  // const res = await fetch(`/api/movie?id=${result.id}`);
  // const movie = await res.json();
  // console.log(movie);
  const getDetails = async (id: any) => {
    const res = await fetch(`/api/movie?id=${id}`);
    const movie = await res.json();
    return movie;
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [result]);

  let img_path = `https://image.tmdb.org/t/p/w500${result.backdrop_path}`;
  if (result.id === 1) {
    img_path = "/img-blade-runner-1.webp";
  }
  const genres = result.genres;
  const companies = result.production_companies;

  // const { base64 } = await getBlurData(`https://image.tmdb.org/t/p/w500${result.backdrop_path}`);

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

  const handleClosePopup = () => {
    document.querySelector("body")?.classList.remove("popup_open");
    setSelectedId(null);
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
          {result.title}
        </p>
        <div
          className="absolute bottom-4 right-4 sm:right-12"
          onClick={() => handleWhishlist()}
        >
          <CirclePlus />
        </div>
      </div>
      <div className="relative flex flex-col justify-between gap-4 bg-dark-light p-7 sm:p-12 sm:flex-row sm:gap-0">
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <div className="flex flex-col">
              <div className="flex flex-col items-start mb-1 gap-0 sm:gap-5 sm:flex-row sm:items-center">
                <p className="font-bold">{result.release_date}</p>
                <Rating
                  rating={result.vote_average}
                  voteCount={result.vote_count}
                />
              </div>
              <ResleasedTag status={result.status} />
              {result.adult && (
                <div>
                  <span>+18</span>violence
                </div>
              )}
              <p className="text-base max-w-md font-bold mb-1">
                {result.tagline}
              </p>
              <p className="text-base max-w-md">{result.overview}</p>
            </div>
            <ul>
              <li>
                <p className="text-sm">
                  <span className="text-grey-medium mr-2.5">Origin</span>
                  <span>{result.original_language}</span>
                </p>
              </li>
              <li>
                <p className="text-sm">
                  <span className="text-grey-medium mr-2.5">Genre</span>
                </p>
                <ul>
                  {genres.map((genre: any) => (
                    <li key={genre.id} className="text-sm">
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <p className="text-sm">
                  <span className="text-grey-medium mr-2.5">Budget</span>
                  <span>{result.budget} €</span>
                </p>
              </li>
              <li>
                <p className="text-sm">
                  <span className="text-grey-medium mr-2.5">Revenue</span>
                  <span>{result.revenue} €</span>
                </p>
              </li>
              <li>
                <p className="text-sm">
                  <span className="text-grey-medium mr-2.5">Companies</span>
                </p>
                <ul>
                  {companies.map((companie: any) => (
                    <li key={companie.id} className="text-sm">
                      {companie.name} ({companie.origin_country})
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
}

import Image from "next/image";
import Close from "@/app/ui/svg/Close";
import CirclePlus from "@/app/ui/svg/CirclePlus";
import { useState, useEffect } from "react";
import Skeleton from "./Skeleton";

export default function Popup({ result, setSelectedId }: any) {
  const [loading, setLoading] = useState(true);

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
  const handleWhishlist = () => {
    console.log("add to wishlist");
  };

  return (
    <>
      <div className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-dark-light before:to-transparent">
        <div
          className="absolute flex items-center justify-center w-8 h-8 bg-black rounded-full top-1 right-1 cursor-pointer"
          onClick={() => setSelectedId(null)}
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
        <p className="absolute w-full bottom-1 left-0 pl-12 text-xl">
          {result.title}
        </p>
        <div
          className="absolute right-12 bottom-4"
          onClick={() => handleWhishlist()}
        >
          <CirclePlus />
        </div>
      </div>
      <div className="relative flex justify-between bg-dark-light p-12 ">
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <p className="font-bold mr-2.5">{result.release_date}</p>
                <p>
                  <span>{result.vote_average}/10</span>
                  <span className="text-sm"> ({result.vote_count} votes)</span>
                </p>
                <p>{result.status}</p>
              </div>
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

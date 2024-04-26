import Image from "next/image";
import Rating from "@/app/ui/Rating";
import { useThemeContext } from "@/providers/popup-provider";

const API_KEY = process.env.IMDB_KEY;

export default function Card({ result }: any) {
  //backdrop_path || poster_path
  const { setSelectedId } = useThemeContext();
  const handlePopup = (resultId: any) => {
    document.querySelector("body")?.classList.add("popup_open");
    setSelectedId(resultId);
  };

  return (
    <div
      onClick={() => handlePopup(result.id)}
      className="group relative card bg-base-100 shadow-xl rounded overflow-hidden cursor-pointer"
    >
      <figure>
        <Image
          src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
          width={500}
          height={281}
          alt="Picture of the author"
          className="group-hover:brightness-50 group-hover:scale-100 sm:group-hover:scale-125 transition-all duration-500"
        />
      </figure>
      <div className="absolute bottom-0 px-1 py-1 w-full hidden group-hover:hidden sm:group-hover:block">
        <p>{result.title}</p>
        <Rating rating={result.vote_average} voteCount={result.vote_count} />
      </div>
    </div>
  );
}

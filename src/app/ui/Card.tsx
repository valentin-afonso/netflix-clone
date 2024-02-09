import Image from "next/image";
import { motion } from "framer-motion";

const API_KEY = process.env.IMDB_KEY;

export default function Card({ result, setSelectedId, setSelectedMovie }: any) {
  //backdrop_path || poster_path
  const handlePopup = async (result: any) => {
    const res = await fetch(`/api/movie?id=${result.id}`);
    const movie = await res.json();

    setSelectedId(result.id);
    setSelectedMovie(movie.data);
  };

  return (
    <>
      <motion.div
        layoutId={result.id}
        onClick={() => handlePopup(result)}
        className="group relative card bg-base-100 shadow-xl rounded overflow-hidden cursor-pointer"
      >
        <figure>
          <Image
            src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
            width={500}
            height={500}
            alt="Picture of the author"
            className="group-hover:brightness-50 group-hover:scale-125 transition-all duration-500 max-h-slide"
          />
        </figure>
        <div className="absolute bottom-0 px-1 py-1 w-full hidden group-hover:block">
          <p>{result.title}</p>
          <div>{result.vote_average}/10</div>
        </div>
      </motion.div>
    </>
  );
}

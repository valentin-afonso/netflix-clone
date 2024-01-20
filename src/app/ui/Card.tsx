import Image from 'next/image'
import { motion } from "framer-motion"

export default function Card({result, setSelectedId, setSelectedMovie}: any) {

    //backdrop_path || poster_path
    const handlePopup = (result: any) => {
      setSelectedId(result.id)
      setSelectedMovie(result)
    }

  return (
    <>
        <motion.div layoutId={result.id} onClick={() => handlePopup(result) } className="group relative card bg-base-100 shadow-xl rounded overflow-hidden cursor-pointer">
            <figure>
                <Image
                    src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className='group-hover:brightness-50 group-hover:scale-125 transition-all duration-500'
                />

            </figure>
            <div className="absolute bottom-0 px-1 py-1 w-full hidden group-hover:block">
                <p>{result.title}</p>
                <div>{result.vote_average}</div>
            </div>
        </motion.div>
    </>
  )
}

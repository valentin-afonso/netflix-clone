'use client'

import {useState} from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"
import Popup from './Popup'

export default function Card({result}: any) {
    const [selectedId, setSelectedId,] = useState(null)
    //backdrop_path || poster_path
    // result.id
  return (
    <>
        <motion.div layoutId={result.id} onClick={() => setSelectedId(result.id)} className="group relative card bg-base-100 shadow-xl rounded overflow-hidden cursor-pointer">
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

        <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: '-50%',  x: '-50%' }}
            animate={{ opacity: 1, scale: 1,  y: '-50%', x: '-50%' }}
            exit={{ opacity: 0, scale: 0,  y: '-50%', x: '-50%'}}
            className='fixed top-1/2 left-1/2 z-50 w-140'
          >
            <Popup result={result} setSelectedId={setSelectedId} />
          </motion.div>
        )}
        </AnimatePresence>
        <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            className='fixed top-0 left-0 w-full h-full z-20 bg-black/[.8]'
            onClick={() => setSelectedId(null)}
          >
          </motion.div>
        )}
        </AnimatePresence>
    </>
  )
}

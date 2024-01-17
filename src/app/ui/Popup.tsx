import Image from 'next/image'

export default function Popup({result, setSelectedId}: any) {

  return (
    <>
      <div className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black before:to-transparent">
        <div className='absolute top-1 right-1 cursor-pointer'>
          <p onClick={() => setSelectedId(null)}>close</p>
        </div>
        <Image
              src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
              width={720}
              height={405}
              alt="Picture of the author"
              className='w-full'
          />
          <p className='absolute w-full bottom-1 left-1 text-xl'>{result.title}</p>
      </div>
      <div className='bg-black p-4'>
        <p>
          <span>{result.vote_average}/10</span>
          <span className='text-sm'> ({result.vote_count} votes)</span>
        </p>
        
        <p>{result.original_language}</p>
        {result.adult && (
          <div>+18</div>
        )}
        <p>{result.overview}</p> 
      </div>
    </>
  )
}

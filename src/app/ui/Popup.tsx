import Image from 'next/image'
import Close from '@/app/ui/svg/Close'

export default function Popup({result, setSelectedId}: any) {
  let img_path = `https://image.tmdb.org/t/p/w500${result.backdrop_path}`
  if (result.id === 1) {
    img_path = '/img-blade-runner-1.webp'
  }
  // const { base64 } = await getBlurData(`https://image.tmdb.org/t/p/w500${result.backdrop_path}`);
  return (
    <>
      <div className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-dark-light before:to-transparent">
        <div className='absolute flex items-center justify-center w-8 h-8 bg-black rounded-full top-1 right-1 cursor-pointer' onClick={() => setSelectedId(null)}>
          <Close />
        </div>
        <Image
              src={img_path}
              width={720}
              height={405}
              alt="Picture of the author"
              className='w-full'
          />
          <p className='absolute w-full bottom-1 left-1 text-xl'>{result.title}</p>
      </div>
      <div className='bg-dark-light p-4'>
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

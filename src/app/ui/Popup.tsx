import Image from 'next/image'

export default function Popup({result, setSelectedId}: any) {
  return (
    <div>
        <Image
            src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
            width={500}
            height={500}
            alt="Picture of the author"
        />
        {result.title}
        {result.overview}
        {result.popularity}
        {result.vote_average}
        {result.vote_count}
        {result.original_language}
        {result.adult}
        <div><p onClick={() => setSelectedId(null)}>close</p></div>
        
    </div>
  )
}

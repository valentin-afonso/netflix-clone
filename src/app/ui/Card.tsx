import Image from 'next/image'

export default function Card({result}: any) {
    //backdrop_path || poster_path
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded overflow-hidden">
        <figure>
            <Image
                src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
                width={500}
                height={500}
                alt="Picture of the author"
            />

        </figure>
        <div className="p-5">
            <h2>
            {result.title}
            <div >{result.vote_average}</div>
            </h2>
            <p>{result.overview}</p>
            <div>
            <div>Fashion</div> 
            <div>Products</div>
            </div>
        </div>
    </div>
  )
}

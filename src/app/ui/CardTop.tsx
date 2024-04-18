import Image from "next/image";

export default function CardTop({ result }: any) {
  return (
    <div className="card overflow-hidden">
      <figure>
        <Image
          src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
          width={500}
          height={750}
          alt="Picture of the author"
          className="relative w-40 z-10 shadow-xl rounded transition-all duration-500"
        />
      </figure>
      <div className="p-5 hidden">
        <p>{result.title}</p>
        <div>{result.vote_average}</div>
        <div>
          <div>Fashion</div>
          <div>Products</div>
        </div>
      </div>
    </div>
  );
}

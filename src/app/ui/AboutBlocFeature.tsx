import Image from "next/image";

export default function AboutBlocFeature() {
  return (
    <div className="flex justify-between">
      <div>
        <Image
          src="/img-bladerunner-1.webp"
          width={890}
          height={240}
          alt="image movies catalog"
          className="brightness-50"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p>Every feature you&#39ve ever wanted</p>
        <ul>
          <li>Create your wishlist</li>
          <li>Add your favourites movies</li>
          <li>Watch details of every movie</li>
        </ul>
      </div>
    </div>
  );
}

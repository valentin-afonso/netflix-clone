import Image from "next/image";
import TextSimple from "@/app/ui/TextSimple";
import Subtitle from "@/app/ui/Subtitle";

export default function AboutBlocFeature() {
  return (
    <div className="flex justify-between max-w-[1280px] m-auto pt-48">
      <div>
        <Image
          src="/mockup-mobile.webp"
          width={890}
          height={240}
          alt="image movies catalog"
          className="brightness-50"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Subtitle>Every feature you&#39;ve ever wanted</Subtitle>
        <ul>
          <li>Create your wishlist</li>
          <li>Add your favourites movies</li>
          <li>Watch details of every movie</li>
        </ul>
      </div>
    </div>
  );
}

import Image from "next/image";
import TextSimple from "@/app/ui/TextSimple";
import Subtitle from "@/app/ui/Subtitle";
import ItemFeature from "@/app/ui/ItemFeature";

export default function AboutBlocFeature() {
  return (
    <div className="flex justify-between max-w-[1280px] m-auto pt-12 items-center sm:flex-row flex-col-reverse gap-9 sm:gap-0 px-2 sm:px-0">
      <div>
        <Image
          src="/mockup-mobile.webp"
          width={890}
          height={240}
          alt="image movies catalog"
          className="brightness-95"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Subtitle>Every feature you&#39;ve ever wanted</Subtitle>
        <ul className="divide-y divide-white/[.15]">
          <ItemFeature text="Create your wishlist" />
          <ItemFeature text="Add your favourites movies" />
          <ItemFeature text="Watch details of every movie" />
        </ul>
      </div>
    </div>
  );
}

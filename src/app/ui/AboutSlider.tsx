import Image from "next/image";
import Title from "@/app/ui/Title";
import StarFull from "./svg/StarFull";

export default function AboutSlider() {
  return (
    <div className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-2/6 before:bg-gradient-to-t before:from-dark before:to-transparent before:z-2">
      <figure>
        <Image
          src="/img-openheimer.webp"
          width={1920}
          height={1080}
          alt="Cover oppenheimer movie"
          className="brightness-50 max-h-144 object-cover"
          placeholder="blur"
          blurDataURL="/img-openheimer-low-quality.webp"
        />
      </figure>
      <div className="relative w-full max-w-[1280px] m-auto">
        <div className="absolute flex flex-col gap-2 sm:gap-8 bottom-0 sm:bottom-24 z-2 left-2 sm:left-0">
          <div className="flex flex-col gap-1">
            <Title>About this app</Title>
            <p>All the best for movies addict</p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs mt-3 mb-1 max-w-lg pr-4 sm:text-base">
              For all movies lover
            </p>
            <ul className="flex gap-1">
              <li>
                <StarFull />
              </li>
              <li>
                <StarFull />
              </li>
              <li>
                <StarFull />
              </li>
              <li>
                <StarFull />
              </li>
              <li>
                <StarFull />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Title from "@/app/ui/Title";
import TextSimple from "@/app/ui/TextSimple";

export default function Page() {
  return (
    <>
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
          <div className="absolute flex flex-col gap-8 bottom-0 sm:bottom-24 left-2 sm:left-0 z-2">
            <div className="flex flex-col gap-1">
              <Title>My favourites movies</Title>
              <p>Here is all your favorites movies</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-20">
        <TextSimple>Work in progress...</TextSimple>
      </div>
    </>
  );
}

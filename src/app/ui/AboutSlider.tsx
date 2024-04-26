import Image from "next/image";
import Title from "@/app/ui/Title";

export default function AboutSlider() {
  return (
    <div>
      <figure>
        <Image
          src="/img-blade-runner-1.webp"
          width={1920}
          height={1080}
          alt="Cover oppenheimer movie"
          className="brightness-50"
        />
      </figure>
      <div className="flex flex-col gap-1">
        <Title>About this app</Title>
        <p>All the best for movies addict</p>
      </div>
      <p className="text-xs mt-3 mb-3 max-w-lg pr-4 sm:text-base">
        For all movies lover
      </p>
      <div>5 stars</div>
    </div>
  );
}

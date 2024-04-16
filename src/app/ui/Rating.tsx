import StarFull from "@/app/ui/svg/StarFull";
import StarEmpty from "@/app/ui/svg/StarEmpty";

export default function Rating({ rating, voteCount }: any) {
  const roundedRating = Math.round(rating / 2);
  const fullStars = roundedRating;
  const emptyStars = 5 - fullStars;

  const fullStarsArray = Array.from({ length: fullStars }, (_, index) => (
    <StarFull key={`full-star-${index}`} />
  ));
  const emptyStarsArray = Array.from({ length: emptyStars }, (_, index) => (
    <StarEmpty key={`empty-star-${index}`} />
  ));
  return (
    <div className="flex items-center">
      <div className="text-2xl mr-0.5 font-extrabold">{roundedRating}</div>
      <div className="flex items-center mr-2.5">
        {fullStarsArray}
        {emptyStarsArray}
      </div>
      <p className="text-grey-medium text-sm leading-normal">
        ({voteCount} votes)
      </p>
    </div>
  );
}

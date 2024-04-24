import { Suspense } from "react";
import PopupContent from "./PopupContent";
import Skeleton from "./Skeleton";

export default function Popup({ movieId, setSelectedId }: any) {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <PopupContent movieId={movieId} setSelectedId={setSelectedId} />
      </Suspense>
    </>
  );
}

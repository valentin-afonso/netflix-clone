import { Suspense } from "react";
import PopupContent from "./PopupContent";

export default function Popup({ movieId, setSelectedId }: any) {
  return (
    <>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PopupContent movieId={movieId} setSelectedId={setSelectedId} />
      </Suspense>
    </>
  );
}

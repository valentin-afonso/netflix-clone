export default function Skeleton() {
  return (
    <div className="bg-dark-light flex flex-col gap-5 w-full h-screen max-h-screen sm:max-h-[98vh] sm:w-[600px] lg:w-140">
      <div className="w-full h-[500px] rounded-md bg-gray "></div>
      <div className="w-full p-7 overflow-hidden before:absolute before:bg-gradient-to-r before:from-white/[.06] to-transparent before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite]">
        <div className="flex flex-col gap-y-2">
          <div className="h-6 rounded-md bg-gray" />
          <div className="h-6 w-11/12 rounded-md bg-gray" />
          <div className="h-20 w-8/12 rounded-md bg-gray" />
        </div>
      </div>
    </div>
  );
}

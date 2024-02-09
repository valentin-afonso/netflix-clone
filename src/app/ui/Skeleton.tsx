export default function Skeleton() {
  return (
    <div className="w-full overflow-hidden before:absolute before:bg-gradient-to-r before:from-white/[.06] to-transparent before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite]">
      <div className="flex flex-col gap-y-2">
        <div className="h-6 rounded-md bg-gray" />
        <div className="h-6 w-11/12 rounded-md bg-gray" />
        <div className="h-20 w-8/12 rounded-md bg-gray" />
      </div>
    </div>
  );
}

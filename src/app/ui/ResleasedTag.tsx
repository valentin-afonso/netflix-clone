import Available from "@/app/ui/svg/Available";

export default function ResleasedTag({ status }: any) {
  return (
    <div className="flex items-center gap-1 mb-4">
      <div className={`${status !== "Released" ? "opacity-25" : ""}`}>
        <Available />
      </div>
      {status}
    </div>
  );
}

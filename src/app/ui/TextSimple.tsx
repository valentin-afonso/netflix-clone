export default function TextSimple({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="opacity-65 text-sm sm:text-base">{children}</p>;
}

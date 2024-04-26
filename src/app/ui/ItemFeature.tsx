import Feature from "@/app/ui/svg/Feature";

export default function ItemFeature({ text }: any) {
  return (
    <li className="flex gap-2 py-5 px-2">
      <Feature />
      <p className="text-lg opacity-65">{text}</p>
    </li>
  );
}

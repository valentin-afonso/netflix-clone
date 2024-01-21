"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ name, href }: any) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const linkClassName = isActive ? "active" : "";
  return (
    <>
      <Link href={href} className={`px-5 py-5 inline-block ${linkClassName}`}>
        {name}
      </Link>
    </>
  );
}

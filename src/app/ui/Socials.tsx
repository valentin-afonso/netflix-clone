import SocialGithub from "./svg/SocialGithub";
import SocialLinkedin from "./svg/SocialLinkedin";
import SocialTwitter from "./svg/SocialTwitter";
import Link from "next/link";

export default function Socials() {
  return (
    <ul className="flex gap-2 justify-center mt-12">
      <li>
        <Link href="https://github.com/valentin-afonso" target="_blank">
          <SocialGithub />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/valentin-afonso-793130199/"
          target="_blank"
        >
          <SocialLinkedin />
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com/valentinafso" target="_blank">
          <SocialTwitter />
        </Link>
      </li>
    </ul>
  );
}

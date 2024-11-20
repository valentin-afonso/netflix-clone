import NavLinks from "./NavLinks";

export default function MainNav() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex justify-center">
        <li>
          <NavLinks name="Home" href="/browser" />
        </li>
        <li>
          <NavLinks name="Wishlist" href="/browser/wishlist" />
        </li>
        <li>
          <NavLinks name="Favourites" href="/browser/favourites" />
        </li>
        <li>
          <NavLinks name="About" href="/browser/about" />
        </li>
      </ul>
    </nav>
  );
}

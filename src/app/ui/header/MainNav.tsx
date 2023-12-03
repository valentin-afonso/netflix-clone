import NavLinks from "./NavLinks";

export default function MainNav() {
  return (
    <nav>
        <ul className="flex justify-center" >
            <li>
                <NavLinks 
                    name = 'Home'
                    href= '/'
                />
            </li>
            <li>
                <NavLinks 
                    name = 'Wishlist'
                    href= '/wishlist'
                />
            </li>
            <li>
                <NavLinks 
                    name = 'Favourites'
                    href= '/favourites'
                />
            </li>
            <li>
                <NavLinks 
                    name = 'About'
                    href= '/about'
                />
            </li>
        </ul>
   </nav>
  )
}

import TitleSecond from "./TitleSecond";
import WishlistMovies from "./WishlistMovies";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Wishlist() {
  try {
    const session = await getServerSession(authOptions);
    if (session && session.user) {
      const email = session.user.email;
      const resMoviesWishlist = await fetch(
        "http://localhost:3000/api/wishlistMovies",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      const movies = await resMoviesWishlist.json();
      if (movies) {
        return (
          <>
            <TitleSecond>Wishlist</TitleSecond>
            <WishlistMovies movies={movies.movie} />
          </>
        );
      } else {
        return <></>;
      }
    }
  } catch (error) {
    // setLoading(false);
    console.log("Error during fetching wishlist: ", error);
  }
}

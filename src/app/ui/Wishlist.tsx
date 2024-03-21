import TitleSecond from "./TitleSecond";

export default async function Wishlist() {
  try {
    const resMoviesWishlist = await fetch(
      "http://localhost:3000/api/wishlistMovies",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const movie = await resMoviesWishlist.json();
    console.log(movie);
    if (movie) {
      return <></>;
    } else {
      return (
        <>
          <TitleSecond>Wishlist</TitleSecond>
        </>
      );
    }
  } catch (error) {
    // setLoading(false);
    console.log("Error during fetching wishlist: ", error);
  }
}

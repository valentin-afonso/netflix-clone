import { toast } from "sonner";
import { useState, useEffect } from "react";
import CirclePlus from "@/app/ui/svg/CirclePlus";
import { useThemeContext } from "@/providers/wishlist-provider";

export default function ButtonWishlist({ movieId }: any) {
  const { moviesIdInWishlist, setMoviesIdInWishlist } = useThemeContext();

  const [isWishlist, setIsWishlist] = useState<any>(null);

  const handleWhishlist = async () => {
    setIsWishlist(true);
    try {
      if (!movieId) {
        // setLoading(false);
        return;
      }
      const resMovieExists = await fetch("api/existInWishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movieId }),
      });

      const { movie } = await resMovieExists.json();

      if (movie) {
        console.log("Movie already exists in wishlist");
        // setLoading(false);
        return;
      }

      const res = await fetch("api/addToWishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movieId,
        }),
      });
      if (res.ok) {
        setMoviesIdInWishlist(!moviesIdInWishlist);
        toast.message("Add to your wishlist with success", {
          description: "titre du film",
        });
      } else {
        // setLoading(false);
        console.log("adding to wishlist failed.");
      }
    } catch (error) {
      // setLoading(false);
      console.log("Error during adding to wishlist: ", error);
    }
  };
  const removeFromWishList = async () => {
    setIsWishlist(false);
    try {
      if (!movieId) {
        return;
      }
      const resMovieExists = await fetch("api/existInWishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movieId }),
      });

      const { movie } = await resMovieExists.json();

      if (movie) {
        const res = await fetch("api/removeFromWishlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            movieId,
          }),
        });
        if (res.ok) {
          setMoviesIdInWishlist(!moviesIdInWishlist);
          toast.message("Movie removed from your wishlist", {
            description: "titre du film",
          });
        } else {
          // setLoading(false);
          console.log("removing from your wishlist failed.");
        }
      }
    } catch (error) {
      console.log("Error during removing from wishlist: ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resMovieExists = await fetch("api/existInWishlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ movieId }),
        });

        const { movie } = await resMovieExists.json();

        if (movie) {
          setIsWishlist(true);
        } else {
          setIsWishlist(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [movieId]);

  if (isWishlist === null) {
    return;
  }
  if (isWishlist) {
    return (
      <button
        className="absolute bottom-4 right-4 cursor-pointer sm:right-12"
        onClick={() => removeFromWishList()}
      >
        remove
      </button>
    );
  }
  if (!isWishlist) {
    return (
      <button
        className="absolute bottom-4 right-4 cursor-pointer sm:right-12"
        onClick={() => handleWhishlist()}
        disabled={isWishlist}
      >
        <CirclePlus />
      </button>
    );
  }
}

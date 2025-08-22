import { memo } from "react";
import { useSelector } from "react-redux";
import MovieView from "../../shared/components/movie-view/MovieView";
import type { RootState } from "../../app/store";

const Saved = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.value);

  return (
    <div className="container mx-auto">
      {wishlist.length > 0 ? (
        <MovieView data={wishlist} />
      ) : (
        <p className="text-gray-500">Saqlangan kinolar yoq</p>
      )}
    </div>
  );
};

export default memo(Saved);

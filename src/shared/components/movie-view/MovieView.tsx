import { memo, type FC } from "react";
import { IMAGE_URL } from "../../const";
import { useNavigate } from "react-router-dom";
import { Bookmark } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishes } from "../../../pages/saved/store/savedSlice";
import type { RootState } from "../../../app/store";

interface Props {
  data: any;
}

const MovieView: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wishlist = useSelector((state: RootState) => state.wishlist.value);

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
        {data?.map((movie: any) => {
          const isSaved = wishlist.some((item) => item.id === movie.id);

          return (
            <div key={movie.id} className="cursor-pointer">
              <div
                className="relative"
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                <img
                  loading="lazy"
                  src={`${IMAGE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full rounded-lg"
                />
                <button
                  className={`absolute top-2 right-2 rounded-full p-1 shadow-md cursor-pointer 
                  ${isSaved ? "bg-purple-600" : "bg-gray-200"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(toggleWishes(movie));
                  }}
                >
                  <Bookmark
                    className={`w-5 h-5 ${
                      isSaved ? "text-white" : "text-gray-700"
                    }`}
                  />
                </button>
              </div>

              <div className="p-3">
                <h3
                  className="font-bold text-xl line-clamp-1 text-gray-700"
                  title={movie.title}
                >
                  {movie.title}
                </h3>
                <p className="text-gray-500">⭐️ {movie.vote_average}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(MovieView);

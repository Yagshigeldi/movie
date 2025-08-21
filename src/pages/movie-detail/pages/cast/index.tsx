import { memo, useState } from "react";
import { useMovieDetail } from "../../services/useMovieDetail";
import { useNavigate, useParams } from "react-router-dom";
import { DEFAULT_IMAGE, IMAGE_URL } from "../../../../shared/const";

const Cast = () => {
  const { id } = useParams();
  const { getMovieItems } = useMovieDetail();
  const { data: creditsData } = getMovieItems(id || "", "credits");
  const [showCast, setShowCast] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="Index">
      <div className={`flex flex-wrap justify-center gap-2 h-${showCast ? "auto" : "[255px]"} overflow-hidden`}>
        {creditsData?.cast
          ?.map((user: any) => {
            const image = user.profile_path
              ? IMAGE_URL + user.profile_path
              : DEFAULT_IMAGE;
            return (
              <div key={user.id} className="w-[120px] h-[250px]">
                <div>
                  <img
                  onClick={() => navigate(`/person/${user.id}`)}
                    loading="lazy"
                    src={image}
                    width={80}
                    alt=""
                    className="w-full"
                  />
                </div>
                <h3 className="text-gray-500 line-clamp-2">{user.name}</h3>
                <p className="text-gray-500 line-clamp-1">{user.character}</p>
              </div>
            );
          })}
      </div>
      <div className="flex justify-center mt-5 mb-5">
        <button
          onClick={() => setShowCast((p) => !p)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          {showCast ? "Hide" : "See more"}
        </button>
      </div>
    </div>
  );
};

export default memo(Cast);

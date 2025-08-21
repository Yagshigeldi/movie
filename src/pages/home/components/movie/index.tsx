import { memo, type FC } from "react";
import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../../../../shared/const";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/free-mode";
// @ts-ignore
import "swiper/css/pagination";

import "./style.css";

// Swiper modules
import { Navigation } from "swiper/modules";

interface Props {
  data: any;
}

const MovieViewHome: FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto pb-10 mt-10">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {data?.map((item: any) => (
          <SwiperSlide key={item.id}>
            <div
              onClick={() => navigate(`/movie/${item.id}`)}
              className="cursor-pointer relative group"
            >
              <img
                className="rounded-lg w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                src={`${IMAGE_URL}${item.poster_path}`}
                alt={item.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(MovieViewHome);
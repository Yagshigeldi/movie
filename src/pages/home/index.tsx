import { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useMovie } from "./services/useMovie";
import { IMAGE_URL } from "../../shared/const";
import MovieViewHome from './components/movie'

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/free-mode";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/thumbs";

import "./hero.css";

const Home = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const { getNowPlayingMovies } = useMovie();
  const { data } = getNowPlayingMovies();

  return (
    <div className="container">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 rounded-xl"
      >
        {data?.results.map((movie: any) => (
          <SwiperSlide key={movie.id}>
            <img src={IMAGE_URL + movie.backdrop_path} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper hero-thumbs"
        style={{ width: "37.6%" }}
      >
        {data?.results.map((movie: any) => (
          <SwiperSlide className="rounded-xl overflow-hidden" key={movie.id}>
            <img src={IMAGE_URL + movie.backdrop_path} />
          </SwiperSlide>
        ))}
      </Swiper>

      <MovieViewHome data={data?.results}/>
    </div>
  );
};

export default memo(Home);

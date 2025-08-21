import { memo } from "react";
import { useParams } from "react-router-dom";
import { usePerson } from "./services/usePerson";
import { IMAGE_URL } from "../../shared/const";
import { Image } from "antd";
import MovieView from "../../shared/components/movie-view/MovieView";

const Person = () => {
  const { id } = useParams();
  const { getPersonById, getPersonItem } = usePerson();

  const { data } = getPersonById(id || "");
  const {data: imageData} = getPersonItem(id || "", "images");
  const {data: movieData} = getPersonItem(id || "", "movie_credits");


  return (
    <div className="container">
      <div className="grid md:grid-cols-2">
        <div>
          <img src={IMAGE_URL + data?.profile_path} width={400} alt="" />
        </div>
        <div>
          <h1 className="text-2xl text-white">{data?.name}</h1>
          <strong className="text-white">{data?.birthday}</strong>
          <p className="text-white">{data?.biography}</p>
        </div>
      </div>
      <div className="flex overflow-x-auto">
        {
          imageData?.profiles?.map((item:any, index:number) => (
            <Image key={index} src={IMAGE_URL + item.file_path} className="min-w-[150px]"/>
          ))}
      </div>
      <div>
        <MovieView data={movieData?.cast}/>
      </div>
    </div>
  );
};

export default memo(Person);

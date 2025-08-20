import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetail } from './services/useMovieDetail';
import { DEFAULT_IMAGE, IMAGE_URL } from '../../shared/const';
import MovieView from '../../shared/components/movie-view/MovieView';
import { Image } from 'antd';

const MovieDetail = () => {
  const {id} = useParams()
  const {getMovieById, getMovieItems} = useMovieDetail()
  const {data, isLoading} = getMovieById(id || "")
  const {data: imagesData} = getMovieItems(id || "", "images")
  const {data: similarData} = getMovieItems(id || "", "similar")
  const {data: creditsData} = getMovieItems(id || "", "credits")

  console.log(creditsData)
  console.log(similarData)
  console.log(imagesData)
  
  if(isLoading) {
    return <div className='container mx-auto'>
      <div className='w-full h-[500px] bg-gray-300 animate-pulse'></div>
      <div className='my-3 w-[60%] h-10 bg-gray-300 animate-pulse'></div>
      <div className='my-3 w-[30%] h-10 bg-gray-300 animate-pulse'></div> 
    </div>
  }     
  return (
    <div className="container mx-auto">
      <div>
        <img src={`${IMAGE_URL}${data?.backdrop_path}`} alt="" />
      </div>
      <div>
        <h1 className='text-3xl font-bold'>{data?.title}</h1>
        <strong>{data?.budget?.toLocaleString()} USD</strong>
      </div>
      <div className='flex flex-wrap'>
        {
          imagesData?.backdrops?.slice(0, 20)?.map((item: any, inx: number) =>(
            // <img loading='lazy' key={inx} src={IMAGE_URL + item.file_path} width={180} alt="" />
            <Image loading='lazy' key={inx} src={IMAGE_URL + item.file_path} width={180} alt=""/>
          ))}
      </div>
      <div className='flex flex-wrap'>
        {
          creditsData?.cast?.map((user: any) => {
            const image = user.profile_path ? IMAGE_URL + user.profile_path : DEFAULT_IMAGE
            return <div key={user.id}>
              <div>
                <img loading='lazy' src={image} width={80} alt="" />
              </div>
              <h3>{user.name}</h3>
              <p className='text-gray-500'>{user.character}</p>
            </div>
          })}
      </div>
      <div>
        <MovieView data={similarData?.results}/>
      </div>
    </div>
  );
};

export default memo(MovieDetail);
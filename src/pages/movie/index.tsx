import { memo} from 'react';
import { useMovie } from './services/useMovie';
import MovieView from '../../shared/components/movie-view/MovieView';
import { Pagination, Select, Skeleton, type PaginationProps} from 'antd';
import { useGenre } from './services/useGenre';
import { useParamsHook } from '../../shared/hooks/useParams';
import { PERIOD } from '../../shared/static';

const Movie = () => {
  const {getParam, setParam, removeParam} = useParamsHook()
  // const [genre, setGenre] = useState("")
  // const [page, setPage] = useState("1")
  const with_genres = getParam("genre") || ""
  const page = getParam("page") || "1"
  const period = getParam("period") || ""

  const item = PERIOD.find((i: any) => i.value === Number(period))
  
  const {getMovies} = useMovie()
  const {getGenres} = useGenre()
  const {data, isLoading} = getMovies({
    page, with_genres,
    "release_date.gte": item?.gte,
    "release_date.lte": item?.lte})
  const {data: genreData} = getGenres()
  const options = genreData?.genres?.map((item: any) => ({value: item.id, label: item.name}))

  const onChange: PaginationProps['onChange'] = (page) => {
    // setPage(page.toString())
    if (page === 1) {
      removeParam("page")
    } else {
      setParam("page", page)
    }
  }

  const handleChangePeriod = (value:string) => {
    setParam("period", value)
  }

  const handleChange = (value: string) => {
    // setGenre(value)
    setParam("genre", value)
  }

  return (
    <div className="Index">
      <div className="container mx-auto mb-6 flex gap-5">
        <Select onChange={handleChange}
        className='w-40'
        placeholder ="Select genre"
        options={options}/>
        <Select onChange={handleChangePeriod} className='w-40' placeholder="Select period" options={PERIOD}/>
      </div>
      {
        isLoading && <div className='container mx-auto'>
          <Skeleton active/>
        </div>
      }
      <MovieView data={data?.results}/>
      <div className='flex justify-center'>
        <Pagination current={Number(page)} onChange={onChange} showSizeChanger={false} total={data?.total_results > 10000 ? 10000 : data?.total_results} defaultPageSize={20}/>
      </div>
    </div>
  );
};

export default memo(Movie);
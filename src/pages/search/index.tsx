import { Input } from 'antd';
import { memo, useEffect, useState, type ChangeEvent } from 'react';
import { useSearch } from './services/useSearch';
import MovieView from '../../shared/components/movie-view/MovieView';
import useDebounce from '../../shared/hooks/useDebounce';
import { useParamsHook } from '../../shared/hooks/useParams';

const Search = () => {
  const {getParam, setParam, removeParam} = useParamsHook()
  // const [value, setValue] = useState("")
  const [value, setValue] = useState(getParam("search") || "")
  const {getMoviesBySearch} = useSearch()
  const debouncedValue = useDebounce(value)

  const {data} = getMoviesBySearch({query: debouncedValue})

  useEffect(() => {
    if (value) {
      setParam("search", value)
    } else {
      removeParam("search")
    }
  }, [value])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className="container">
        <Input value={value} onChange={handleChange} placeholder='search...'/>
        <div className='mt-6'>
          <MovieView data={data?.results}/>
        </div>
    </div>
  );
};

export default memo(Search);
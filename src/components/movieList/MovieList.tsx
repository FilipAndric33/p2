import SlideShow from '../slideShow/SlideShow';
import PopularCard from '../popularCard/PopularCard';
import { useGetMovies } from '../../hooks/useGetMovies';
import { useSetSlideShowContent } from '../../hooks/useSetSlideShowContent';

const MovieList = () => {
  const movies = useGetMovies();
  const slideShowContent = useSetSlideShowContent({ content: movies });

  return (
    <div className={'flex flex-col flex-1'}>
      {slideShowContent && <SlideShow content={slideShowContent} />}
      <div>
        <h2 className={'text-2xl font-bold mt-8 mb-4'}>
          Popular on Honey Movies
        </h2>
      </div>
      <div className={'flex justify-between gap-12'}>
        {movies &&
          movies.length > 0 &&
          movies
            .slice(4, 7)
            .map((show, index) => <PopularCard content={show} key={index} />)}
      </div>
    </div>
  );
};

export default MovieList;

import React from 'react';
import SlideShow from '../slideShow/SlideShow';
import PopularCard from '../popularCard/PopularCard';
import { useGetMovies } from '../../hooks/useGetMovies';
import { useSetSlideShowContent } from '../../hooks/useSetSlideShowContent';

const MovieList = () => {
  const movies = useGetMovies();
  const slideShowContent = useSetSlideShowContent({ content: movies });

  return (
    <div className={'flex column'}>
      {slideShowContent && <SlideShow content={slideShowContent} />}
      <h2>Popular on Honey Movies</h2>
      <div className={'popular-cards-content flex'}>
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

import React, { useEffect, useState } from 'react';
import { Movie } from '../../models/movies';
import { fetchMovies } from '../../services/movies.service';
import SlideShow from '../slideShow/SlideShow';
import PopularCard from '../popularCard/PopularCard';

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [slideShowContent, setSlideShowContent] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetchMovies();
        if (response) setMovies(response);
      } catch (e) {
        console.log(e);
      }
    };

    getMovies();
  }, []);

  useEffect(() => {
    if (movies && movies.length >= 3) {
      setSlideShowContent(movies.slice(0, 3));
    }
  }, [movies]);

  return (
    <div className={'flex column'}>
      {slideShowContent && <SlideShow content={slideShowContent} />}
      <h2>Popular on Honey Movies</h2>
      <div className={'flex space-between'}>
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

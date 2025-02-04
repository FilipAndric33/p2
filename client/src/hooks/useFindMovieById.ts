import { useGetMovies } from './useGetMovies';
import { useEffect, useState } from 'react';
import { movie } from '../models/movies';

export const useFindMovieById = (id: string) => {
  const movies = useGetMovies();
  const [movie, setMovie] = useState<movie>();
  const idNum = parseInt(id, 10);

  useEffect(() => {
    if (idNum) {
      const foundMovie = movies.find((movie) => movie.id === idNum);
      if (foundMovie) {
        setMovie(foundMovie);
      }
    }
  }, [movies]);

  return movie;
};

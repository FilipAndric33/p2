import { useGetMovies } from './useGetMovies';
import { useEffect, useState } from 'react';
import { Movie } from '../models/movies';

export const useFindMovieById = (id: string) => {
  const movies = useGetMovies();
  const [movie, setMovie] = useState<Movie>();
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

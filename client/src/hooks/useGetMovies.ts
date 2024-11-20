import { useEffect, useState } from 'react';
import { fetchMovies } from '../services/movies.service';
import { Movie } from '../models/movies';

export const useGetMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

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

  return movies;
};

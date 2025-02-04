import { useEffect, useState } from 'react';
import { fetchMovies } from '../services/fetchMovies.service';
import { movie } from '../models/movies';

export const useGetMovies = () => {
  const [movies, setMovies] = useState<movie[]>([]);

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

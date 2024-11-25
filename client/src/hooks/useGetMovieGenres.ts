import React, { useEffect } from 'react';
import { fetchMovieGenreIds } from '../services/fetchMovieGenreIds.service';
import { MovieGenres } from '../models/movieGenres';

export const useGetMovieGenres = () => {
  const [movieGenres, setmovieGenres] = React.useState<
    MovieGenres[] | undefined
  >([]);

  useEffect(() => {
    const getShowGenres = async () => {
      try {
        const response = await fetchMovieGenreIds();
        if (response) {
          setmovieGenres(response.genres);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getShowGenres();
  }, []);

  return movieGenres;
};

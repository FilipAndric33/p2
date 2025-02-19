import React, { useEffect } from 'react';
import { fetchMovieGenreIds } from '../services/fetchMovieGenreIds.service';
import { movieGenres } from '../models/movieGenres';

export const useGetMovieGenres = () => {
  const [movieGenres, setMovieGenres] = React.useState<
    movieGenres[] | undefined
  >([]);

  useEffect(() => {
    const getShowGenres = async () => {
      try {
        const response = await fetchMovieGenreIds();
        if (response) {
          setMovieGenres(response.genres);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getShowGenres();
  }, []);

  return movieGenres;
};

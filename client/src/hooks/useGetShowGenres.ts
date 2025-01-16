import React, { useEffect } from 'react';
import { fetchShowGenreIds } from '../services/fetchShowGenreIds.service';
import { showGenres } from '../models/showGenres';

export const useGetShowGenres = () => {
  const [showGenres, setShowGenres] = React.useState<showGenres[] | undefined>(
    [],
  );

  useEffect(() => {
    const getShowGenres = async () => {
      try {
        const response = await fetchShowGenreIds();
        if (response) {
          setShowGenres(response.genres);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getShowGenres();
  }, []);

  return showGenres;
};

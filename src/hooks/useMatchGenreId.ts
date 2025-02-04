import { useEffect, useState } from 'react';
import { useGetShowGenres } from './useGetShowGenres';
import { movieGenreNames } from '../models/movieGenres';
import { show } from '../models/shows';
import { movie } from '../models/movies';
import { useIsShow } from './useIsShow';
import { useGetMovieGenres } from './useGetMovieGenres';
import { showGenreNames } from '../models/showGenres';

export const useMatchGenreId = (content: show | movie) => {
  const isShow = useIsShow({ content });
  const movieGenreArray = useGetMovieGenres();
  const showGenreArray = useGetShowGenres();
  const [showGenreNames, setShowGenreNames] = useState<showGenreNames[]>([]);
  const [movieGenreNames, setMovieGenreNames] = useState<movieGenreNames[]>([]);

  useEffect(() => {
    if (isShow && showGenreArray) {
      const genreNames = content.genre_ids
        .map((id) => {
          const genre = showGenreArray.find((genre) => genre.id === id);
          return genre ? genre.name : null;
        })
        .filter(Boolean) as showGenreNames[];

      setShowGenreNames(genreNames);
    }
  }, [showGenreArray]);

  useEffect(() => {
    if (!isShow && movieGenreArray) {
      const genreNames = content.genre_ids
        .map((id) => {
          const genre = movieGenreArray.find((genre) => genre.id === id);
          return genre ? genre.name : null;
        })
        .filter(Boolean) as movieGenreNames[];

      setMovieGenreNames(genreNames);
    }
  }, [movieGenreArray]);

  return [showGenreNames, movieGenreNames];
};

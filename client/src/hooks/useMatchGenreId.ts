import { useEffect, useState } from 'react';
import { useGetShowGenres } from './useGetShowGenres';
import { MovieGenreNames } from '../models/movieGenres';
import { Show } from '../models/shows';
import { Movie } from '../models/movies';
import { useIsShow } from './useIsShow';
import { useGetMovieGenres } from './useGetMovieGenres';
import { ShowGenreNames } from '../models/showGenres';

export const useMatchGenreId = (content: Show | Movie) => {
  const isShow = useIsShow({ content });
  const movieGenreArray = useGetMovieGenres();
  const showGenreArray = useGetShowGenres();
  const [showGenreNames, setShowGenreNames] = useState<ShowGenreNames[]>([]);
  const [movieGenreNames, setMovieGenreNames] = useState<MovieGenreNames[]>([]);

  useEffect(() => {
    if (isShow && showGenreArray) {
      const genreNames = content.genre_ids
        .map((id) => {
          const genre = showGenreArray.find((genre) => genre.id === id);
          return genre ? genre.name : null;
        })
        .filter(Boolean) as ShowGenreNames[];

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
        .filter(Boolean) as MovieGenreNames[];

      setMovieGenreNames(genreNames);
    }
  }, [movieGenreArray]);

  return [showGenreNames, movieGenreNames];
};

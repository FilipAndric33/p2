import { httpClient } from './http.service';
import { movieGenres } from '../models/movieGenres';

export const fetchMovieGenreIds = async () => {
  try {
    const response = await httpClient.get<{ genres: movieGenres[] }>(
      '3/genre/movie/list',
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

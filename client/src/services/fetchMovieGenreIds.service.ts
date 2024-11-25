import { httpClient } from './http.service';
import { MovieGenres } from '../models/movieGenres';

export const fetchMovieGenreIds = async () => {
  try {
    const response = await httpClient.get<{ genres: MovieGenres[] }>(
      '3/genre/movie/list',
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

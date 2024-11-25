import { httpClient } from './http.service';
import { ShowGenres } from '../models/showGenres';

export const fetchShowGenreIds = async () => {
  try {
    const response = await httpClient.get<{ genres: ShowGenres[] }>(
      '3/genre/tv/list',
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

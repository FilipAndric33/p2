import { httpClient } from './tmdbHttp.service';
import { showGenres } from '../models/showGenres';

export const fetchShowGenreIds = async () => {
  try {
    const response = await httpClient.get<{ genres: showGenres[] }>(
      '3/genre/tv/list',
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

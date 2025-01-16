import { httpClient } from './http.service';
import { movie } from '../models/movies';
import { FetchedResults } from '../models/fetchedResults';

export const fetchMovies = async (): Promise<movie[] | undefined> => {
  try {
    const response =
      await httpClient.get<FetchedResults<movie>>('3/movie/popular');
    const movies: FetchedResults<movie> = response.data;
    return movies.results;
  } catch (error) {
    console.log(error);
  }
};

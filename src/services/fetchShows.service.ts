import { httpClient } from './tmdbHttp.service';
import { show } from '../models/shows';
import { FetchedResults } from '../models/fetchedResults';

export const fetchShows = async (): Promise<show[] | undefined> => {
  try {
    const response = await httpClient.get<FetchedResults<show>>('3/tv/popular');
    const shows: FetchedResults<show> = response.data;
    return shows.results;
  } catch (error) {
    console.log(error);
  }
};

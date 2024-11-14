import { httpClient } from "./http.service";
import { Show } from "../models/shows";
import { FetchedResults } from "../models/fetchedResults";

export const fetchShows= async (): Promise<Show[] | undefined> => {
    try {
        const response = await httpClient.get<FetchedResults<Show>>("3/tv/popular");
        const shows: FetchedResults<Show> = response.data;
        return shows.results;
    } catch (error) {
        console.log(error);
    }
}
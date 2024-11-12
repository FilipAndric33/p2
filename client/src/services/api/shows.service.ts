import { httpClient } from "./http.service";
import { Show } from "../../models/shows";

export const fetchShows= async (): Promise<Show[] | undefined> => {
    try {
        const response = await httpClient.get<Show[]>("3/tv/popular");
        const shows: Show[] = response.data;
        console.log(shows);
        // @ts-ignore
        return shows.results;
    } catch (error) {
        console.log(error);
    }
}
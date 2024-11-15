import { httpClient } from "./http.service";
import { Movie } from "../models/movies";
import { FetchedResults } from "../models/fetchedResults";

export const fetchMovies= async (): Promise<Movie[] | undefined> => {
    try {
        const response = await httpClient.get<FetchedResults<Movie>>("3/movie/popular");
        const movies: FetchedResults<Movie> = response.data;
        return movies.results;
    } catch (error) {
        console.log(error);
    }
}
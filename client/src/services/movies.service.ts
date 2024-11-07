import { httpClient } from "./http.service";
import { Movie } from "../models/movies";

export const fetchMovies= async (): Promise<Movie[] | undefined> => {
    try {
        const response = await httpClient.get<Movie[]>("3/movie/popular");
        const movies: Movie[] = response.data;
        console.log(movies);
        // @ts-ignore
        return movies.results;
    } catch (error) {
        console.log(error);
    }
}
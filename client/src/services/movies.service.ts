import { httpClient } from "./http.service";
import { Movie } from "../models/movies";

export const fetchMovies= async (): Promise<Movie[]> => {
    try {
        const response = await httpClient.get<Movie[]>("https://api.themoviedb.org/3/movie");
        const movies: Movie[] = response.data;
        console.log(movies);
        return movies;
    } catch (error) {
        console.log(error);
        return [];
    }
}
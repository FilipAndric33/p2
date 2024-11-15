import {Movie} from "../models/movies";

export const useCarousels = (movies: Movie[]) => {
    const carousels: Movie[][] = [];
    for(let i = 0; i < movies.length; i += 10) {
        carousels.push(movies.slice(i, i + 10));
    }

    return carousels;
}
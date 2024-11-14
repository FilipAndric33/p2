import React, {useEffect, useState} from 'react';
import { fetchMovies } from "../../services/movies.service";
import {Movie} from "../../models/movies";
import MovieList from "../../components/MovieList/MovieList";
import '../styles/cardDisplay.scss';

const MoviePage: React.FC = () => {
    const [movies, setMovies] = useState<Movie[] | undefined>();
    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await fetchMovies();
                setMovies(response);
            } catch (e) {
                console.log(e);
            }
        }

        getMovies();
    }, []);

    return(
        <div className={"page"}>
            {movies && movies.map((movie) => (
                <MovieList key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default MoviePage;
import React from 'react';
import { Movie } from '../../../models/movies'

const MovieList = ({ movie }: {movie: Movie}) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Overview:</strong> {movie.overview}</p>
            <p><strong>Average Vote:</strong> {movie.vote_average}</p>
            <p><strong>Popularity:</strong> {movie.popularity}</p>
        </div>
    );
};

export default MovieList;
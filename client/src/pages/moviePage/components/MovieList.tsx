import React from 'react';
import { Movie } from '../../../models/movies';
import { useBalloonVisibility } from "../../../services/hooks/balloonVisibility.service";

const MovieList = ({ movie }: {movie: Movie}) => {
    const { isBalloonVisible, balloonRef, handleBalloonVisibility } = useBalloonVisibility();

    return (
        <>
            {isBalloonVisible && <div className={"overlay"} />}
            <div className={"movie_card"}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>
                </div>
                <div className={"info"}>
                    <div className={"movie_top"}>
                        <h2>{movie.title}</h2>
                        <p><strong>Release Date:</strong> {movie.release_date}</p>
                        <p className={"overview"}><strong>Overview:</strong> {movie.overview}</p>
                        <span className={"show_more"} onClick={handleBalloonVisibility}><strong>Show more</strong></span>
                        <div className={`balloon ${isBalloonVisible ? 'visible' : ''}`}  ref={balloonRef}>
                            <p className={"full_overview"}><strong>Overview:</strong> {movie.overview}</p>
                        </div>
                    </div>
                    <div>
                        <p><strong>Average Vote:</strong> {movie.vote_average}</p>
                        <p><strong>Popularity:</strong> {movie.popularity}</p>
                    </div>
                </div>
                <button className={"button--secondary"}>Rate</button>
            </div>
        </>
    );
};

export default MovieList;
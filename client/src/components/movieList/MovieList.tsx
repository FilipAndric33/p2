import React, { useState } from 'react';
import { Movie } from '../../models/movies';
import { useBalloonVisibility } from "../../hooks/useBalloonVisibility";
import { Rating } from '../rating/Rating';
import './style/index.scss';

const MovieList = ({ movie }: {movie: Movie}) => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const { balloonRef, handleBalloonVisibility, isBalloonVisible } = useBalloonVisibility(isOverlayVisible, setIsOverlayVisible);

    return (
        <>
            {isOverlayVisible && <div className={"overlay"} />}
                            <div className={"card"}>
                                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}
                                         draggable={false}/>
                                        <h2 className={"title"}>{movie.title}</h2>
                                        <p className={"release"}><strong>Release Date:</strong> {movie.release_date}</p>
                                        <p className={"overview"}><strong>Overview:</strong> {movie.overview}</p>
                                        <span className={"showMore button button--secondary"}
                                              onClick={handleBalloonVisibility}><strong>Show more</strong></span>
                                        <div className={`balloon ${isBalloonVisible ? 'visible' : ''}`} ref={balloonRef}>
                                            <p className={"fullOverview"}><strong>Overview:</strong> {movie.overview}</p>
                                        </div>
                                        <p className={"avg"}><strong>Average Vote:</strong> {movie.vote_average}</p>
                                        <p className={"popularity"}><strong>Popularity:</strong> {movie.popularity}</p>
                                <Rating/>
                            </div>
        </>
    );
};

export default MovieList;
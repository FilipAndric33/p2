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
                <div>
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>
                </div>
                <div className={"info"}>
                    <div className={"top"}>
                        <h2>{movie.title}</h2>
                        <p><strong>Release Date:</strong> {movie.release_date}</p>
                        <p className={"overview"}><strong>Overview:</strong> {movie.overview}</p>
                        <span className={"show_more button button--secondary"} onClick={handleBalloonVisibility}><strong>Show more</strong></span>
                        <div className={`balloon ${isBalloonVisible ? 'visible' : ''}`}  ref={balloonRef}>
                            <p className={"full_overview"}><strong>Overview:</strong> {movie.overview}</p>
                        </div>
                    </div>
                    <div className={"bottom"}>
                        <p><strong>Average Vote:</strong> {movie.vote_average}</p>
                        <p><strong>Popularity:</strong> {movie.popularity}</p>
                    </div>
                </div>
                <Rating setIsOverlayVisible={setIsOverlayVisible} />
            </div>
        </>
    );
};

export default MovieList;
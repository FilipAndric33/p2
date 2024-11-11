import React, { useState, useEffect, useRef } from 'react';
import { Movie } from '../../../models/movies';

const MovieList = ({ movie }: {movie: Movie}) => {
    const [isBalloonVisible, setIsBalloonVisible] = useState(false);
    const balloonRef = useRef<HTMLElement>(null);

    const handleBalloonVisibility = (): void => {
        setIsBalloonVisible((prev: boolean) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(balloonRef.current && !balloonRef.current.contains(event.target as Node)) {
                setIsBalloonVisible(true);
            }
        }

        if(isBalloonVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isBalloonVisible]);

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
                        <span className={"show_more"} onClick={handleBalloonVisibility}>...</span>
                        <div className={`balloon ${isBalloonVisible ? 'visible' : ''}`}  ref={"balloonRef"}>
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
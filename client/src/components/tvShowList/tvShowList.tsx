import React, { useState } from 'react';
import { Show } from '../../models/shows';
import './style/index.scss';
import { useBalloonVisibility } from "../../hooks/useBalloonVisibility";
import { Rating } from '../rating/Rating';

const TVShowList = ({ show }: {show: Show}) => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const { balloonRef, handleBalloonVisibility, isBalloonVisible } = useBalloonVisibility(isOverlayVisible, setIsOverlayVisible);

    return (
        <>
            {isOverlayVisible && <div className={"overlay"} />}
            <div className={"card"}>
                    <img src={`https://image.tmdb.org/t/p/w300${show.poster_path}`} alt={show.name}/>
                        <h2 className={"title"}>{show.name}</h2>
                        <p className={"release"}><strong>First Air Date:</strong> {show.first_air_date}</p>
                        <p className={"overview"}><strong>Overview:</strong> {show.overview}</p>
                        <span className={"showMore button button--secondary"}
                              onClick={handleBalloonVisibility}><strong>Show more</strong></span>
                        <div className={`balloon ${isBalloonVisible ? 'visible' : ''}`} ref={balloonRef}>
                            <p className={"fullOverview"}><strong>Overview:</strong> {show.overview}</p>
                        </div>
                        <p className={"avg"}><strong>Average Vote:</strong> {show.vote_average}</p>
                        <p className={"popularity"}><strong>Popularity:</strong> {show.popularity}</p>
                <Rating/>
            </div>
        </>
    );
};

export default TVShowList;
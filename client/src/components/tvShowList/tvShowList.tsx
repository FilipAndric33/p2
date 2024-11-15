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
                <div>
                    <img src={`https://image.tmdb.org/t/p/w300${show.poster_path}`} alt={show.name}/>
                </div>
                <div className={"info"}>
                    <div className={"top"}>
                        <h2>{show.name}</h2>
                        <p><strong>First Air Date:</strong> {show.first_air_date}</p>
                        <p className={"overview"}><strong>Overview:</strong> {show.overview}</p>
                        <span className={"show_more button button--secondary"}
                              onClick={handleBalloonVisibility}><strong>Show more</strong></span>
                        <div className={`balloon ${isBalloonVisible ? 'visible' : ''}`} ref={balloonRef}>
                            <p className={"full_overview"}><strong>Overview:</strong> {show.overview}</p>
                        </div>
                    </div>
                    <div className={"bottom"}>
                        <p><strong>Average Vote:</strong> {show.vote_average}</p>
                        <p><strong>Popularity:</strong> {show.popularity}</p>
                    </div>
                </div>
                <Rating/>
            </div>
        </>
    );
};

export default TVShowList;
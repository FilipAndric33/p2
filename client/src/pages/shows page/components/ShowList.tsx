import React from 'react';
import { Show } from '../../../models/shows';

const TVShowList = ({ show }: {show: Show}) => {
    return (
        <div>
                <div key={show.id}>
                    <img src={`https://image.tmdb.org/t/p/w300${show.poster_path}`} alt={show.name} />
                    <h2>{show.name}</h2>
                    <p><strong>First Air Date:</strong> {show.first_air_date}</p>
                    <p><strong>Overview:</strong> {show.overview}</p>
                    <p><strong>Average Vote:</strong> {show.vote_average}</p>
                    <p><strong>Popularity:</strong> {show.popularity}</p>
                </div>
        </div>
    );
};

export default TVShowList;
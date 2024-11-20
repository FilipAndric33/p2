import { Show } from '../../models/shows';
import React from 'react';
import { Rating } from '../rating/Rating';
import './style/index.scss';
import { Movie } from '../../models/movies';

interface PopularCardProps {
  content: Show | Movie;
}

const PopularCard: React.FC<PopularCardProps> = ({ content }) => {
  const isShow = (item: Show | Movie): boolean => 'first_air_date' in item;

  return (
    <div className={'flex card-container column space-between'}>
      <div
        className={'background-image'}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300${content.poster_path})`,
        }}
      ></div>
      <div>
        <h4>
          {isShow(content) ? (content as Show).name : (content as Movie).title}
        </h4>
        <Rating />
      </div>

      <div className={'flex card-bottom column'}>
        <div className={'flex space-between'} style={{ width: '100%' }}>
          <div>{isShow(content) ? '10 ep' : ''}</div>
          <div> avg: {content.vote_average}</div>
        </div>
        <div className={'flex space-between'} style={{ width: '100%' }}>
          <button className={'plus'}>+</button>
          <button className={'more-info'}>more info</button>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;

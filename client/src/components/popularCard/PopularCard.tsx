import { Show } from '../../models/shows';
import React from 'react';
import { Rating } from '../rating/Rating';
import './style/index.scss';
import { Movie } from '../../models/movies';
import { useIsShow } from '../../hooks/useIsShow';
import { useMatchGenreId } from '../../hooks/useMatchGenreId';

interface PopularCardProps {
  content: Show | Movie;
}

const PopularCard: React.FC<PopularCardProps> = ({ content }) => {
  const isShow = useIsShow({ content });
  const [showGenreNames, movieGenreNames] = useMatchGenreId(content);

  return (
    <div className={'flex card-container column space-between'}>
      <div
        className={'background-image'}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300${content.poster_path})`,
        }}
      ></div>
      <div>
        <h4>{isShow ? (content as Show).name : (content as Movie).title}</h4>
        <Rating />
      </div>

      <div className={'flex card-bottom column'}>
        <div className={'flex space-between'} style={{ width: '100%' }}>
          <div>{isShow ? '10 ep' : ''}</div>
          <div>{isShow ? showGenreNames[0] : movieGenreNames[0]}</div>
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

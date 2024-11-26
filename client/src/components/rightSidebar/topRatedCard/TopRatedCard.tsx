import React from 'react';
import { Show } from '../../../models/shows';
import { Movie } from '../../../models/movies';
import { useIsShow } from '../../../hooks/useIsShow';
import { useMatchGenreId } from '../../../hooks/useMatchGenreId';
import './style/index.scss';

interface CardProps {
  content: Show | Movie;
}

const TopRatedCard: React.FC<CardProps> = ({ content }) => {
  const isShow = useIsShow({ content });
  const [showGenreNames, movieGenreNames] = useMatchGenreId(content);

  return (
    <div
      className={'flex column space-between top-rated-card'}
      style={{ position: 'relative', gap: '6px' }}
    >
      <div
        className={'background-image'}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300${content.poster_path})`,
        }}
      />
      <h6 className={'card-title'}>{isShow ? (content as Show).name : (content as Movie).title}</h6>
      <div className={'flex column'}>
        <div className={'flex space-between top'}>
          <div>{isShow ? '30ep' : ''}</div>
          <div>{isShow ? showGenreNames[0] : movieGenreNames[0]}</div>
        </div>
        <div className={'flex space-between bottom'}>
          <button className={'plus'}>+</button>
          <button className={'watch-now'}>Watch</button>
        </div>
      </div>
    </div>
  );
};

export default TopRatedCard;

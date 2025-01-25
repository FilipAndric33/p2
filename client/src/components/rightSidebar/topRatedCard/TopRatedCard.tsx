import React from 'react';
import { show } from '../../../models/shows';
import { movie } from '../../../models/movies';
import { useIsShow } from '../../../hooks/useIsShow';
import { useMatchGenreId } from '../../../hooks/useMatchGenreId';
import './style/index.scss';
import { addToWatchlist } from '../../../utils/addToWatchlist';

interface CardProps {
  content: show | movie;
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
      <h6 className={'card-title'}>
        {isShow ? (content as show).name : (content as movie).title}
      </h6>
      <div className={'flex column'}>
        <div className={'flex space-between top'}>
          <div>{isShow ? '30ep' : ''}</div>
          <div>{isShow ? showGenreNames[0] : movieGenreNames[0]}</div>
        </div>
        <div className={'flex space-between bottom'}>
          <button className={'plus'} onClick={() => addToWatchlist(content.id)}>
            +
          </button>
          <button className={'watch-now'}>Watch</button>
        </div>
      </div>
    </div>
  );
};

export default TopRatedCard;

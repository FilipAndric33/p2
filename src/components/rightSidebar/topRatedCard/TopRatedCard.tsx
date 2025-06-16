import React from 'react';
import { show } from '../../../models/shows';
import { movie } from '../../../models/movies';
import { useIsShow } from '../../../hooks/useIsShow';
import { useMatchGenreId } from '../../../hooks/useMatchGenreId';
import { addToWatchlistService } from '../../../services/addToWatchlist.service';

interface CardProps {
  content: show | movie;
}

const TopRatedCard: React.FC<CardProps> = ({ content }) => {
  const isShow = useIsShow({ content });
  const [showGenreNames, movieGenreNames] = useMatchGenreId(content);

  return (
    <div
      className={
        'flex flex-col flex-shrink-0 justify-between relative gap-2 p-2 mr-4 mt-2 h-[15vh] w-6/10 snap-start'
      }
    >
      <div
        className={'background-image gradient-light'}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300${content.poster_path})`,
        }}
      />
      <h6 className={'text-sm font-bold truncate min-w-0'}>
        {isShow ? (content as show).name : (content as movie).title}
      </h6>
      <div className={'flex flex-col'}>
        <div className={'flex justify-between'}>
          <div>{isShow ? '30ep' : ''}</div>
          <div>{isShow ? showGenreNames[0] : movieGenreNames[0]}</div>
        </div>
        <div className={'flex justify-between gap-1'}>
          <button
            className={'btn secondary-btn font-bold py-1 px-2 rounded-md'}
            onClick={() => addToWatchlistService(content.id)}
          >
            +
          </button>
          <button className={'btn primary-btn font-bold w-full rounded-md'}>
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRatedCard;

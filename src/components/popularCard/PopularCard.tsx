import { show } from '../../models/shows';
import React from 'react';
import { Rating } from '../rating/Rating';
import { movie } from '../../models/movies';
import { useIsShow } from '../../hooks/useIsShow';
import { useMatchGenreId } from '../../hooks/useMatchGenreId';
import { Link } from 'react-router-dom';
import { addToWatchlistService } from '../../services/addToWatchlist.service';

interface PopularCardProps {
  content: show | movie;
}

const PopularCard: React.FC<PopularCardProps> = ({ content }) => {
  const isShow = useIsShow({ content });
  const [showGenreNames, movieGenreNames] = useMatchGenreId(content);
  const type = isShow ? 'show' : 'movie';

  return (
    <div
      className={
        'flex flex-col justify-between relative w-3/10 min-h-80 p-2 pt-2'
      }
    >
      <div
        className={'background-image gradient-dark'}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300${content.poster_path})`,
        }}
      ></div>
      <div className={'text-xl font-bold p-4'}>
        <h4 className={'truncate'}>
          {isShow ? (content as show).name : (content as movie).title}
        </h4>
        <Rating />
      </div>

      <div className={'flex flex-col h-3/10'}>
        <div className={'flex justify-between w-full'}>
          <div>{isShow ? '10 ep' : ''}</div>
          <div>{isShow ? showGenreNames[0] : movieGenreNames[0]}</div>
        </div>
        <div className={'flex justify-between items-center h-7/10 w-full'}>
          <button
            className={
              'btn secondary-btn flex items-center h-full px-4 text-4xl font-bold bg-secondary-color-normal rounded-xl'
            }
            onClick={() => addToWatchlistService(content.id)}
          >
            +
          </button>
          <Link
            to={`details/${type}/${content.id}`}
            className={
              'btn primary-btn items-center w-8/11 flex justify-center text-xl h-full bg-primary-color text-black rounded-xl font-bold'
            }
          >
            More info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;

import { show } from '../../models/shows';
import React from 'react';
import { Rating } from '../rating/Rating';
import './style/index.scss';
import { movie } from '../../models/movies';
import { useIsShow } from '../../hooks/useIsShow';
import { useMatchGenreId } from '../../hooks/useMatchGenreId';
import { Link } from 'react-router-dom';

interface PopularCardProps {
  content: show | movie;
}

const PopularCard: React.FC<PopularCardProps> = ({ content }) => {
  const isShow = useIsShow({ content });
  const [showGenreNames, movieGenreNames] = useMatchGenreId(content);
  const type = isShow ? 'show' : 'movie';

  return (
    <div className={'flex card-container column space-between'}>
      <div
        className={'background-image'}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300${content.poster_path})`,
        }}
      ></div>
      <div>
        <h4>{isShow ? (content as show).name : (content as movie).title}</h4>
        <Rating />
      </div>

      <div className={'flex card-bottom column'}>
        <div className={'flex space-between'} style={{ width: '100%' }}>
          <div>{isShow ? '10 ep' : ''}</div>
          <div>{isShow ? showGenreNames[0] : movieGenreNames[0]}</div>
        </div>
        <div
          className={'flex space-between align-items'}
          style={{ width: '100%' }}
        >
          <button className={'plus'}>+</button>
          <Link to={`details/${type}/${content.id}`}>
            <button className={'more-info'}>more info</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;

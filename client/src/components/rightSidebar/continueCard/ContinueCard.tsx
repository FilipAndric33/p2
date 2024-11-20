import React from 'react';
import { Show } from '../../../models/shows';
import { Movie } from '../../../models/movies';
import './style/index.scss';

interface ContinueCardProps {
  content: Show | Movie;
}

const ContinueCard: React.FC<ContinueCardProps> = ({ content }) => {
  const isShow = (item: Show | Movie): boolean => 'first_air_date' in item;

  return (
    <div className={'continue-card flex'} style={{ gap: '6px' }}>
      <div
        className={'flex column space-between'}
        style={{ gap: '6px' }}
      >
        <div
          className={'small-image'}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w92${content.poster_path})`,
          }}
        />
        <button className={'drop'}>Drop</button>
      </div>
      <div className={'flex column space-between'} style={{ gap: '6px' }}>
        <div>
          <h6>
            {isShow(content)
              ? (content as Show).name
              : (content as Movie).title}
          </h6>
          <p style={{ fontSize: '10px' }}>10% left</p>
          <div className={'progress-bar flex'}>
            <div className={'progress'}></div>
            <div className={'remaining'}></div>
          </div>
        </div>
        <button className={'watch-now'}>Watch</button>
      </div>
    </div>
  );
};

export default ContinueCard;

import React from 'react';
import { show } from '../../../models/shows';
import { movie } from '../../../models/movies';
import { useIsShow } from '../../../hooks/useIsShow';

interface ContinueCardProps {
  content: show | movie;
}

const ContinueCard: React.FC<ContinueCardProps> = ({ content }) => {
  const isShow = useIsShow({ content });

  return (
    <div className="flex gap-2 p-2 mr-4 mt-2 bg-[rgb(33,36,45)] rounded-lg h-[15vh] w-6/10">
      <div className="flex flex-col justify-between gap-2">
        <div
          className="top-0 left-0 w-full h-full bg-cover bg-center max-h-6/10 rounded-md"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w92${content.poster_path})`,
          }}
        />
        <button
          className={'btn secondary-btn text-sm font-bold rounded-md p-1'}
        >
          Drop
        </button>
      </div>
      <div className="flex flex-col justify-between gap-2 min-w-0">
        <div>
          <h6 className={'text-sm truncate font-bold'}>
            {isShow ? (content as show).name : (content as movie).title}
          </h6>
          <p style={{ fontSize: '10px' }}>10% left</p>
          <div className="progress-bar flex">
            <div className="progress"></div>
            <div className="remaining"></div>
          </div>
        </div>
        <button className="btn primary-btn text-sm rounded-md p-0.5 font-bold">
          Watch
        </button>
      </div>
    </div>
  );
};

ContinueCard.displayName = 'ContinueCard';

export default ContinueCard;

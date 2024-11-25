import React, { useState } from 'react';
import { Movie } from '../../models/movies';
import './style/index.scss';
import { Show } from '../../models/shows';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIsShow } from '../../hooks/useIsShow';

interface SlideShowProps {
  content: Show[] | Movie[];
}

const SlideShow: React.FC<SlideShowProps> = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const isShow = useIsShow({ content: content[currentIndex] });

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % content.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + content.length) % content.length);
  };

  if (!content || content.length === 0) {
    return <div>loading...</div>;
  }

  return (
    content && (
      <div className={'flex slide-show column space-between'}>
        <div
          className={'background-image'}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w780${content[currentIndex].backdrop_path})`,
          }}
        />
        <div>
          <h2>
            {isShow
              ? (content[currentIndex] as Show).name
              : (content[currentIndex] as Movie).title}
          </h2>
        </div>

        <div className={'flex space-between align-items'}>
          <button className={'previous'} onClick={handlePrevious}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className={'next'} onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <div className={'slideshow-bottom flex space-between'}>
          <button className={'flex align-items watchlist'}>
            <p className={'plus'}>+ </p>
            <p>Watchlist</p>
          </button>
          <div className={'progress-dots flex'}>
            <button
              className={`dot ${currentIndex === 0 ? 'active' : ''}`}
              onClick={() => setCurrentIndex(0)}
            ></button>
            <button
              className={`dot ${currentIndex === 1 ? 'active' : ''}`}
              onClick={() => setCurrentIndex(1)}
            ></button>
            <button
              className={`dot ${currentIndex === 2 ? 'active' : ''}`}
              onClick={() => setCurrentIndex(2)}
            ></button>
          </div>
          <button className={'watch-now'}>Watch now</button>
        </div>
      </div>
    )
  );
};

export default SlideShow;

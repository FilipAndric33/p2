import React, { useState } from 'react';
import { movie } from '../../models/movies';
import { show } from '../../models/shows';
import {
  faChevronLeft,
  faChevronRight,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIsShow } from '../../hooks/useIsShow';
import { addToWatchlistService } from '../../services/addToWatchlist.service';

interface SlideShowProps {
  content: show[] | movie[];
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
      <div
        className={
          'flex flex-col justify-between relative min-h-[40vh] my-8 p-6'
        }
      >
        <div
          className={'background-image w-full h-full gradient-normal'}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${content[currentIndex].backdrop_path})`,
          }}
        />
        <div className={'font-normal font-lato text-4xl'}>
          <h1>
            {isShow
              ? (content[currentIndex] as show).name
              : (content[currentIndex] as movie).title}
          </h1>
        </div>

        <div
          className={
            'flex justify-between items-center slideshow-arrow-container'
          }
        >
          <button
            className={
              'btn flex items-center bg-secondary-color-normal p-3 text-sm font-bold rounded-xl hover:bg-secondary-color-strong hover:text-primary-color'
            }
            onClick={handlePrevious}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            className={
              'btn flex items-center bg-secondary-color-normal p-3 text-sm font-bold rounded-xl hover:bg-secondary-color-strong hover:text-primary-color'
            }
            onClick={handleNext}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <div
          className={
            'flex flex-row flex-1 max-h-8 w-full justify-between items-center'
          }
        >
          <button
            className={
              'btn watchlist-btn flex items-center px-3 py-2 rounded-md'
            }
            onClick={() => addToWatchlistService(content[currentIndex].id)}
          >
            <FontAwesomeIcon icon={faPlus} className={'mr-2 font-bold'} />
            <p>Watchlist</p>
          </button>
          <div
            className={
              'flex flex-row justify-center items-center bg-secondary-color-normal p-2 max-h-5/7 rounded-sm'
            }
          >
            <button
              className={`btn p-1 rounded-full h-1/20 bg-white mx-1 ${currentIndex === 0 ? '!bg-primary-color' : ''}`}
              onClick={() => setCurrentIndex(0)}
            ></button>
            <button
              className={`btn p-1 rounded-full h-1/20 bg-white mx-1 ${currentIndex === 1 ? '!bg-primary-color' : ''}`}
              onClick={() => setCurrentIndex(1)}
            ></button>
            <button
              className={`btn p-1 rounded-full h-1/20 bg-white mx-1 ${currentIndex === 2 ? '!bg-primary-color' : ''}`}
              onClick={() => setCurrentIndex(2)}
            ></button>
          </div>
          <button className={'btn primary-btn rounded-lg font-bold px-6 py-2'}>
            Watch now
          </button>
        </div>
      </div>
    )
  );
};

export default SlideShow;

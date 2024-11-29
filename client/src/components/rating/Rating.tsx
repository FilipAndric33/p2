import React from 'react';
import { useRating } from '../../hooks/useRating';

export const Rating: React.FC = () => {
  const {
    currentRating,
    hoveredRating,
    handleStarClick,
    handleStarHover,
    handleStarLeave,
  } = useRating();

  return (
    <div className={'ratingContainer'}>
      {
        <div className={'starRating'}>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              onClick={() => handleStarClick(index + 1)}
              onMouseEnter={() => handleStarHover(index + 1)}
              onMouseLeave={() => handleStarLeave()}
              style={{
                color:
                  (hoveredRating || currentRating) >= index + 1
                    ? 'yellow'
                    : 'grey',
                cursor: 'pointer',
              }}
            >
              ★
            </span>
          ))}
        </div>
      }
    </div>
  );
};

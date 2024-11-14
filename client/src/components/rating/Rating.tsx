import React from 'react';
import { useRating } from '../../hooks/useRating';
import './style/index.scss';

interface RatingProps {
    setIsOverlayVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const Rating: React.FC<RatingProps> = ({setIsOverlayVisible}: RatingProps) => {
    const {
        currentRating,
        rating,
        hoveredRating,
        showThankYouMessage,
        handleRateClick,
        handleStarClick,
        handleStarHover,
        handleStarLeave
    } = useRating(setIsOverlayVisible);

    return (
        <div className={"ratingContainer"}>
            <button className={"button button--secondary"} onClick={handleRateClick}>Rate</button>
            {showThankYouMessage && <p className={"thankYouMessage"}>Thanks for rating!</p>}
            {rating && (
                <div className={"starRating"}>
                    {[...Array(10)].map((_, index) => (
                        <span
                        key={index}
                        onClick={() => handleStarClick(index + 1)}
                        onMouseEnter={() => handleStarHover(index + 1)}
                        onMouseLeave={() => handleStarLeave()}
                        style={{
                            color: (hoveredRating || currentRating) >= index + 1 ? "yellow" : "grey",
                            cursor: "pointer",
                            fontSize: '20px',
                        }}
                        >
                            ★
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}
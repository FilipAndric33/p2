import React, {useCallback, useState} from 'react';

export const useRating = (setIsOverlayVisible:  React.Dispatch<React.SetStateAction<boolean>>) => {
    const [currentRating, setCurrentRating] = useState<number>(0);
    const [rating, setRating] = React.useState<boolean>(false);
    const [hoveredRating, setHoveredRating] = React.useState<number>(0);
    const [showThankYouMessage, setShowThankYouMessage] = useState(false);

    const handleRateClick = useCallback(() => {
        setRating(true);
        setIsOverlayVisible(true);
    }, []);

    const handleStarClick = useCallback((rating: number) => {
        setCurrentRating(rating);
        setIsOverlayVisible(false);
        setShowThankYouMessage(true);
        setTimeout(() => setShowThankYouMessage(false), 2000);
    }, []);

    const handleStarHover = useCallback((rating: number) => {
        setHoveredRating(rating);
    }, []);

    const handleStarLeave = useCallback(() => {
        setHoveredRating(0);
    }, []);

    return {
        currentRating,
        rating,
        hoveredRating,
        showThankYouMessage,
        handleRateClick,
        handleStarClick,
        handleStarHover,
        handleStarLeave
    }
}
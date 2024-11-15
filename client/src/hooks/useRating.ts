import React, {useCallback, useState} from 'react';

export const useRating = () => {
    const [currentRating, setCurrentRating] = useState<number>(0);
    const [hoveredRating, setHoveredRating] = React.useState<number>(0);
    const [showThankYouMessage, setShowThankYouMessage] = useState(false);

    const handleStarClick = useCallback((rating: number) => {
        setCurrentRating(rating);
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
        hoveredRating,
        showThankYouMessage,
        handleStarClick,
        handleStarHover,
        handleStarLeave
    }
}
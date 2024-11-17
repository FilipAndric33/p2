import React, {useCallback, useState} from 'react';

export const useRating = () => {
    const [currentRating, setCurrentRating] = useState<number>(0);
    const [hoveredRating, setHoveredRating] = React.useState<number>(0);

    const handleStarClick = useCallback((rating: number) => {
        setCurrentRating(rating);
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
        handleStarClick,
        handleStarHover,
        handleStarLeave
    }
}
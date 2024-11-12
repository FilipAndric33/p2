import React, {useCallback, useState} from 'react';

export const useRating = (isOverlayVisible: boolean, setIsOverlayVisible:  React.Dispatch<React.SetStateAction<boolean>>) => {
    const [rating, setRating] = React.useState<boolean>(false);
    const [currentRating, setCurrentRating] = React.useState<number | null>(null);
    const [hoveredRating, setHoveredRating] = React.useState<number | null>(null);
    const [showThankyouMessage, setshowThankyouMessage] = useState(false);

    const handleRateClick = useCallback(() => {
        setRating(true);
        setIsOverlayVisible(true);
    }, []);


}
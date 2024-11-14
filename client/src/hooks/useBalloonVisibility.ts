import React, { useEffect, useRef } from 'react';

export const useBalloonVisibility = (isOverlayVisible: boolean, setIsOverlayVisible:  React.Dispatch<React.SetStateAction<boolean>>) => {
    const balloonRef = useRef<HTMLDivElement>(null);
    const [isBalloonVisible, setIsBalloonVisible] = React.useState(false);

    const handleBalloonVisibility = (): void => {
        setIsBalloonVisible((prev: boolean) => !prev);
        setIsOverlayVisible((prev: boolean) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(balloonRef.current && !balloonRef.current.contains(event.target as Node)) {
                setIsBalloonVisible(false);
                setIsOverlayVisible(false);
            }
        }

        if(isOverlayVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOverlayVisible]);

    return {
        balloonRef,
        handleBalloonVisibility,
        isBalloonVisible
    }
}
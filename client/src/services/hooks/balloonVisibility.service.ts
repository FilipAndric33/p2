import { useEffect, useState, useRef } from 'react';

export const useBalloonVisibility = () => {
    const [isBalloonVisible, setIsBalloonVisible] = useState(false);
    const balloonRef = useRef<HTMLDivElement>(null);

    const handleBalloonVisibility = (): void => {
        setIsBalloonVisible((prev: boolean) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(balloonRef.current && !balloonRef.current.contains(event.target as Node)) {
                setIsBalloonVisible(false);
            }
        }

        if(isBalloonVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isBalloonVisible]);

    return {
        isBalloonVisible,
        balloonRef,
        handleBalloonVisibility
    }
}
import { MutableRefObject, useEffect, useRef } from "react";

export const useCarouselScroll = (carouselRefs: MutableRefObject<(HTMLDivElement | null)[]>) => {
    const startX = useRef(0);
    const isDragging = useRef(false);
    const scrollLeft = useRef(0);
    const multiplier = 2;

    useEffect(() => {
        const stableRefs = [...carouselRefs.current];

        const handleMouseDown = (e: MouseEvent, index: number) => {
            const carousel = carouselRefs.current[index];
            if(carousel) {
                isDragging.current = true;
                scrollLeft.current = carousel.scrollLeft;
                startX.current = e.clientX;
                carousel.style.cursor="grabbing";

                e.preventDefault();
            }
        }

        const handleMouseMove = (e: MouseEvent, index: number) => {
            const carousel = carouselRefs.current[index];
            if(carousel && isDragging.current) {
                e.preventDefault();
                const x = e.clientX;
                const distance = (x - startX.current) * multiplier;
                carousel.scrollLeft = scrollLeft.current - distance;
            }
        }


        const handleMouseUp = (index: number) => {
            const carousel = carouselRefs.current[index];
            isDragging.current = false;
            if(carousel) {
                carousel.style.cursor="grab";
            }
        }

        const attachEventListeners = (carousel: HTMLDivElement, index: number) => {
            carousel.addEventListener("pointerdown", (e) => handleMouseDown(e, index));
            carousel.addEventListener("pointerup", () => handleMouseUp(index));
            carousel.addEventListener("pointermove", (e) => handleMouseMove(e, index));
        }

        const detachEventListeners = (carousel: HTMLDivElement, index: number) => {
            carousel.removeEventListener("pointerdown", (e) => handleMouseDown(e, index));
            carousel.removeEventListener("pointerup", () => handleMouseUp(index));
            carousel.removeEventListener("pointermove", (e) => handleMouseMove(e, index));
        }

        stableRefs.forEach((el, i) => {
            if(el) {
                attachEventListeners(el, i);
            }
        });

        return () => {
            stableRefs.forEach((el, i) => {
                if(el) {
                    detachEventListeners(el, i);
                }
            })
        }
    }, [carouselRefs.current])
}
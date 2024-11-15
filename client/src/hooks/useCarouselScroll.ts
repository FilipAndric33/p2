import {MutableRefObject, useEffect, useRef, useState} from "react";

export const useCarouselScroll = (carouselRefs: MutableRefObject<(HTMLDivElement | null)[]>) => {
    const startX = useRef(0);
    const isDragging = useRef(false);
    const scrollLeft = useRef(0);
    const multiplier = 2;
    const [refsReady, setRefsReady] = useState(false);

    useEffect(() => {
        if(carouselRefs.current.every((ref) => ref !== null)) {
            console.log("ready");
            setRefsReady(true);
        }
    }, [carouselRefs.current])

    useEffect(() => {
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
            carousel.addEventListener("mousedown", (e) => handleMouseDown(e, index));
            carousel.addEventListener("mouseup", () => handleMouseUp(index));
            carousel.addEventListener("mousemove", (e) => handleMouseMove(e, index));
            console.log("event listeners attache");
        }

        const detachEventListeners = (carousel: HTMLDivElement, index: number) => {
            carousel.removeEventListener("mousedown", (e) => handleMouseDown(e, index));
            carousel.removeEventListener("mouseup", () => handleMouseUp(index));
            carousel.removeEventListener("mousemove", (e) => handleMouseMove(e, index));
            console.log("event listeners detached");
        }

        carouselRefs.current.forEach((el, i) => {
            if(el) {
                attachEventListeners(el, i);
            }
        });

        return () => {
            carouselRefs.current.forEach((el, i) => {
                if(el) {
                    detachEventListeners(el, i);
                }
            })
        }
    }, [refsReady])
}
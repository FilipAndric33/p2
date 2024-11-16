import React, {useEffect, useRef, useState} from 'react';
import { fetchShows } from "../../services/shows.service";
import { Show } from "../../models/shows";
import ShowList from "../../components/tvShowList/tvShowList";
import {useCarousels} from "../../hooks/useCarousels";
import {useCarouselScroll} from "../../hooks/useCarouselScroll";

const TvShowPage: React.FC = () => {
    const [shows, setShows] = useState<Show[] | undefined>();
    const [loading, setLoading] = useState<boolean>(true);
    const carousels = useCarousels(shows || []);
    const carouselRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [refsReady, setRefsReady] = useState(false);

    useEffect(() => {
        const getShows = async () => {
            try {
                const response = await fetchShows();
                setShows(response);
                setLoading(false);
            } catch (e) {
                console.log(e);
                setLoading(false);
            }
        }

        getShows();
    }, []);

    useEffect(() => {
        if(!loading) {
            const allRefsReady = carousels.every((_, index) => carouselRefs.current[index] !== null);
            if(allRefsReady) {
                setRefsReady(true);
            }
        }
    }, [loading]);

    useCarouselScroll(refsReady ? carouselRefs : { current: [] });

    return (

        <div className={"page"}>
            {loading ? (
                    <div>Loading...</div>
                )
                : (carousels.map((carouselShows, index) => (
                    <div className={`carousel carousel-${index}`} key={index}
                         ref={(el) => carouselRefs.current[index] = el}>
                        {carouselShows.map((show: Show, index: number) => (
                            <ShowList key={index} show={show}/>
                        ))}
                    </div>
                )))}
        </div>
)
}

export default TvShowPage;
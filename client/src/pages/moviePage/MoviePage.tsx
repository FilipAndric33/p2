import React, {useEffect, useState, useRef } from 'react';
import { fetchMovies } from "../../services/movies.service";
import {Movie} from "../../models/movies";
import MovieList from "../../components/MovieList/MovieList";
import { useCarousels } from "../../hooks/useCarousels";
import { useCarouselScroll } from "../../hooks/useCarouselScroll";

const MoviePage: React.FC = () => {
    const [movies, setMovies] = useState<Movie[] | undefined>();
    const [loading, setLoading] = useState<boolean>(true);
    const carousels = useCarousels(movies || []);
    const carouselRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [refsReady, setRefsReady] = useState(false);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await fetchMovies();
                setMovies(response);
                setLoading(false);
            } catch (e) {
                console.log(e);
                setLoading(false);
            }
        }

        getMovies();
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



    return(
        <div className={"page"}>
            {loading ? (
                    <div>Loading...</div>
            )
                : (carousels.map((carouselMovies, index) => (
                <div className={`carousel carousel-${index}`} key={index} ref={(el) => carouselRefs.current[index] = el}>
                    {carouselMovies.map((movie: Movie, index) => (
                        <MovieList movie={movie} key={index}/>
                    ))}
                </div>
            )))}
        </div>
    )
}

export default MoviePage;
import React, {useEffect, useState, useRef } from 'react';
import { fetchMovies } from "../../services/movies.service";
import {Movie} from "../../models/movies";
import MovieList from "../../components/MovieList/MovieList";
import {useCarousels} from "../../hooks/useCarousels";
import { useCarouselScroll } from "../../hooks/useCarouselScroll";

const MoviePage: React.FC = () => {
    const [movies, setMovies] = useState<Movie[] | undefined>();
    const carousels = useCarousels(movies || []);
    const carouselRefs = useRef<(HTMLDivElement | null)[]>([]);

    useCarouselScroll(carouselRefs);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await fetchMovies();
                setMovies(response);
            } catch (e) {
                console.log(e);
            }
        }

        getMovies();
    }, []);

    return(
        <div className={"page"}>
            {carousels.map((carouselMovies, index) => (
                <div className={`carousel carousel-${index}`} key={index} ref={(el) => (carouselRefs.current[index] = el)}>
                    {carouselMovies.map((movie: Movie, index) => (
                        <MovieList movie={movie} key={index}/>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default MoviePage;
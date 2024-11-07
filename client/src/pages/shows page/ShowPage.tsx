import React, {useEffect, useState} from 'react';
import { fetchShows } from "../../services/shows.service";
import { Show } from "../../models/shows";
import ShowList from "./components/ShowList";

const MoviePage: React.FC = () => {
    const [shows, setShows] = useState<Show[] | undefined>();
    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await fetchShows();
                setShows(response);
            } catch (e) {
                console.log(e);
            }
        }

        getMovies();
    }, []);

    return(
        <div>
            {shows && shows.map((show) => (
                <ShowList key={show.id} show={show} />
            ))}
        </div>
    )
}

export default MoviePage;
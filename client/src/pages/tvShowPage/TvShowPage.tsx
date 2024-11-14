import React, {useEffect, useState} from 'react';
import { fetchShows } from "../../services/shows.service";
import { Show } from "../../models/shows";
import ShowList from "../../components/tvShowList/tvShowList";
import '../styles/cardDisplay.scss';

const TvShowPage: React.FC = () => {
    const [shows, setShows] = useState<Show[] | undefined>();

    useEffect(() => {
        const getShows = async () => {
            try {
                const response = await fetchShows();
                setShows(response);
            } catch (e) {
                console.log(e);
            }
        }

        getShows();
    }, []);

    return(
        <div className={"page"}>
            {shows && shows.map((show) => (
                <ShowList key={show.id} show={show} />
            ))}
        </div>
    )
}

export default TvShowPage;
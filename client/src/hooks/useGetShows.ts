import { useEffect, useState } from 'react';
import { Show } from '../models/shows';
import { fetchShows } from '../services/shows.service';

export const useGetShows = () => {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    const getShows = async () => {
      try {
        const response = await fetchShows();
        if (response) setShows(response);
      } catch (e) {
        console.log(e);
      }
    };

    getShows();
  }, []);

  return shows;
};

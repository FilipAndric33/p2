import { useEffect, useState } from 'react';
import { show } from '../models/shows';
import { fetchShows } from '../services/fetchShows.service';

export const useGetShows = () => {
  const [shows, setShows] = useState<show[]>([]);

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

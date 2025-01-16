import { useGetShows } from './useGetShows';
import { useEffect, useState } from 'react';
import { show } from '../models/shows';

export const useFindShowById = (id: string) => {
  const shows = useGetShows();
  const [show, setShow] = useState<show>();
  const idNum = parseInt(id, 10);

  useEffect(() => {
    if (idNum) {
      const foundShow = shows.find((show) => show.id === idNum);
      if (foundShow) {
        setShow(foundShow);
      }
    }
  }, [shows]);

  return show;
};

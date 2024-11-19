import React, { useEffect, useState } from 'react';
import { Show } from '../../models/shows';
import { fetchShows } from '../../services/shows.service';
import SlideShow from '../slideShow/SlideShow';
import PopularCard from '../popularCard/PopularCard';

const TVShowList = () => {
  const [shows, setShows] = useState<Show[]>([]);
  const [slideShowContent, setSlideShowContent] = useState<Show[]>([]);

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

  useEffect(() => {
    if (shows && shows.length >= 3) {
      setSlideShowContent(shows.slice(0, 3));
    }
  }, [shows]);

  return (
    <div className={'flex column'}>
      <SlideShow content={slideShowContent} />
      <h2>Popular on Honey Movies</h2>
      <div className={'flex space-between'}>
        {shows &&
          shows.length > 0 &&
          shows
            .slice(4, 7)
            .map((show, index) => <PopularCard content={show} key={index} />)}
      </div>
    </div>
  );
};

export default TVShowList;

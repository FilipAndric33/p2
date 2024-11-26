import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFindMovieById } from '../../hooks/useFindMovieById';
import { useFindShowById } from '../../hooks/useFIndShowById';
import { Show } from '../../models/shows';
import { Movie } from '../../models/movies';
import { faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from '../../components/rating/Rating';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import './style/index.scss';

const ContentDetailsPage: React.FC = () => {
  const { type, id } = useParams();
  const show = useFindShowById(id!);
  const movie = useFindMovieById(id!);
  const [content, setContent] = useState<Show | Movie>();
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    if (type === 'show') {
      setContent(show);
      setIsShow(true);
    } else {
      setContent(movie);
    }
  }, [type, id, show, movie]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return content ? (
    <div
      className={'content-details flex column'}
      style={{ position: 'relative' }}
    >
      <div
        className={'background-image'}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${content.backdrop_path})`,
        }}
      />
      <Link to={'/'}>
        <button className={'flex align-items back-home space-between'}>
          <FontAwesomeIcon icon={faChevronLeft} className={'icon'} />
          Back Home
        </button>
      </Link>
      <div
        className={'flex align-items'}
        style={{ justifyContent: 'center', maxHeight: '50vh' }}
      >
        <div className={'flex column left-side'}>
          <h1>{isShow ? (content as Show).name : (content as Movie).title}</h1>
          <Rating />
          <p>10M+ views</p>
          <div>
            <FontAwesomeIcon icon={faImdb} className={'imdb'} />
          </div>
          <p>{content.overview}</p>
          <div className={'flex'} style={{ maxHeight: '8vh' }}>
            <button className={'watchlist'}>
              <FontAwesomeIcon icon={faPlus} className={'plus'} />
              Watchlist
            </button>
            <button className={'watch-now'}>Watch Now</button>
          </div>
        </div>
        <div className={'right-side'}>
          <div
            className={'background-image'}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${content.poster_path})`,
              borderTopRightRadius: '16px',
              borderTopLeftRadius: '16px',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
          />
          <div className={'top-rated-corner'}>Top rated</div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ContentDetailsPage;

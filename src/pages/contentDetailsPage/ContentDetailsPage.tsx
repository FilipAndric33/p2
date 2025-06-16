import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFindMovieById } from '../../hooks/useFindMovieById';
import { useFindShowById } from '../../hooks/useFIndShowById';
import { show } from '../../models/shows';
import { movie } from '../../models/movies';
import { faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from '../../components/rating/Rating';
import { faImdb } from '@fortawesome/free-brands-svg-icons';

const ContentDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { type, id } = useParams();
  const show = useFindShowById(id!);
  const movie = useFindMovieById(id!);

  const [content, setContent] = useState<show | movie>();
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

  const handleBackClick = () => {
    if (isShow) {
      navigate('/ShowPage');
    } else {
      navigate('/');
    }
  };

  return content ? (
    <div
      className={'w-[100vw] h-[100vh] flex flex-col flex-1'}
      style={{ position: 'relative' }}
    >
      <div
        className={'background-image !rounded-none'}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${content.backdrop_path})`,
        }}
      />

      <button
        className={
          'btn flex items-center text-lg font-bold bg-transparent max-w-[11vw] max-h-[8vh] back-home mb-[8vh] mt-[8vh] mx-[2vw] hover:text-primary-color'
        }
        onClick={handleBackClick}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={'bg-secondary-color-normal p-3 mr-2 rounded-lg'}
        />
        Back Home
      </button>
      <div
        className={
          'flex items-center content-details-content justify-center h-full'
        }
      >
        <div
          className={
            'flex flex-col left-side max-w-4/10 gap-1.5 mr-[15vw] max-h-[70vh]'
          }
        >
          <h1>{isShow ? (content as show).name : (content as movie).title}</h1>
          <Rating />
          <p>10M+ views</p>
          <div>
            <FontAwesomeIcon
              icon={faImdb}
              className={'text-3xl text-primary-color'}
            />
          </div>
          <p>{content.overview}</p>
          <div className={'flex max-h-[10vh] w-6/10'}>
            <button
              className={
                'btn bg-secondary-color-normal border-solid border-2 border-transparent font-bold w-full py-2 rounded-lg hover:bg-black hover:border-white mr-4'
              }
            >
              <FontAwesomeIcon
                icon={faPlus}
                className={'font-bold text-lg mr-2'}
              />
              Watchlist
            </button>
            <button
              className={'btn primary-btn w-full rounded-lg ml-4 font-bold'}
            >
              Watch Now
            </button>
          </div>
        </div>
        <div className={'relative min-w-3/10 h-full'}>
          <div
            className={'background-image !rounded-t-2xl !rounded-b-none h-5/6'}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${content.poster_path})`,
            }}
          />
          <div
            className={
              'top-rated-corner absolute top-0 right-0 py-1 px-8 bg-primary-color font-bold text-black rounded-tr-2xl rounded-bl-2xl'
            }
          >
            Top rated
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ContentDetailsPage;

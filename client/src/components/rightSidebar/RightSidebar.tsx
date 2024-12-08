import React from 'react';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContinueCard from './continueCard/ContinueCard';
import './style/index.scss';
import Showcase from './showcase/Showcase';
import { useSetCardContent } from '../../hooks/useSetCardContent';
import { useGetShows } from '../../hooks/useGetShows';
import TopRatedCard from './topRatedCard/TopRatedCard';
import ShowcaseScroll from './showcase/showcaseScroll/ShowcaseScroll';
import { sharedGenres } from '../../models/sharedGenres';
import GenreCard from './genreCard/GenreCard';

const RightSideBar = () => {
  const shows = useGetShows();
  const continueCardContent = useSetCardContent({ content: shows });
  const topRatedContent = useSetCardContent({ content: shows });

  return (
    <>
      <div className={'user flex'} style={{ position: 'relative' }}>
        <FontAwesomeIcon icon={faBell} />
        <div
          className={'flex username'}
          style={{ position: 'absolute', right: '15%' }}
        >
          Filip
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <FontAwesomeIcon
          icon={faUser}
          style={{ position: 'absolute', right: 0 }}
        />
      </div>
      <div className={'showcase'}>
        {continueCardContent && (
          <Showcase propName={'Continue'}>
            <ShowcaseScroll>
              {continueCardContent.map((content, index) => (
                <ContinueCard content={content} key={index} />
              ))}
            </ShowcaseScroll>
          </Showcase>
        )}
      </div>
      <div className={'showcase'}>
        <Showcase propName={'Top Rated'}>
          <ShowcaseScroll>
            {topRatedContent.map((content, index) => (
              <TopRatedCard content={content} key={index} />
            ))}
          </ShowcaseScroll>
        </Showcase>
      </div>
      <div className={'showcase'}>
        <Showcase propName={'Genres'}>
          {sharedGenres &&
            sharedGenres.map((row, rowIndex) => (
              <ShowcaseScroll key={rowIndex}>
                {row.map((genreName, genreIndex) => (
                  <GenreCard genreName={genreName} key={genreIndex} />
                ))}
              </ShowcaseScroll>
            ))}
        </Showcase>
      </div>
    </>
  );
};

export default RightSideBar;

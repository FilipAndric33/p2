import React from 'react';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContinueCard from './continueCard/ContinueCard';
import './style/index.scss';
import Showcase from './showcase/Showcase';
import { useSetContinueCardContent } from '../../hooks/useSetContinueCardContent';
import { useGetShows } from '../../hooks/useGetShows';

const RightSideBar = () => {
  const shows = useGetShows();
  const continueCardContent = useSetContinueCardContent({ content: shows });

  return (
    <div className={'flex column space-between'}>
      <div className={'user flex'}>
        <FontAwesomeIcon icon={faBell} />
        <div className={'flex'}>
          Filip
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className={'showcase flex column'}>
        <div>
          {continueCardContent && (
            <Showcase propName={'Continue'}>
              {continueCardContent.map((content, index) => (
                <ContinueCard content={content} key={index} />
              ))}
            </Showcase>
          )}
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default RightSideBar;

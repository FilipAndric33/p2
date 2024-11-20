import React, { useRef } from 'react';
import './style/index.scss';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ShowcaseProps {
  children: React.ReactNode;
  propName: string;
}

const Showcase: React.FC<ShowcaseProps> = ({ children, propName }) => {
  const showcaseRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (showcaseRef.current) {
      showcaseRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  const scrollPrevious = () => {
    if (showcaseRef.current) {
      showcaseRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  return (
    <div className={'flex column'}>
      <div className={'flex align-items space-between'}>
        <div className={'flex align-items'}>
          <h5>{propName}</h5>
          <button className={'previous showcase'}>
            <FontAwesomeIcon icon={faChevronLeft} onClick={scrollPrevious} />
          </button>
          <button className={'next showcase'} onClick={scrollNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <button className={'see-more'}>
          Show more <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className={'flex showcase-content'} ref={showcaseRef}>
        {children}
      </div>
    </div>
  );
};

export default Showcase;

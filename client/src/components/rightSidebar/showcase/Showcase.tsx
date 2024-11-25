import React, { cloneElement, ReactElement, useEffect, useRef } from 'react';
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
  const scrollRefs = useRef<Map<number, HTMLDivElement | null>>(new Map());

  const scrollNext = () => {
    scrollRefs.current.forEach((scrollContainer) => {
      if (scrollContainer) {
        scrollContainer.scrollBy({
          left: scrollContainer.offsetWidth,
          behavior: 'smooth',
        });
      }
    });
  };

  const scrollPrevious = () => {
    scrollRefs.current.forEach((scrollContainer) => {
      if (scrollContainer) {
        scrollContainer.scrollBy({
          left: -scrollContainer.offsetWidth,
          behavior: 'smooth',
        });
      }
    });
  };

  const attachRefs = (children: React.ReactNode) =>
    React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        if (!scrollRefs.current.has(index)) {
          scrollRefs.current.set(index, null);
        }
        return cloneElement(child as ReactElement, {
          ref: (el: HTMLDivElement | null) => {
            scrollRefs.current.set(index, el);
          },
        });
      }

      return child;
    });

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
      <div className={'flex showcase-content column'}>
        {attachRefs(children)}
      </div>
    </div>
  );
};

export default Showcase;

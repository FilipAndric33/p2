import React, { cloneElement, ReactElement, useRef } from 'react';
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
    <div className={'flex text-xs flex-col'}>
      <div className={'flex items-center justify-between'}>
        <div className={'flex items-center'}>
          <h5 className={'text-lg font-bold mr-2'}>{propName}</h5>
          <button className={'btn mr-4 hover:text-primary-color'}>
            <FontAwesomeIcon icon={faChevronLeft} onClick={scrollPrevious} />
          </button>
          <button
            className={'btn hover:text-primary-color'}
            onClick={scrollNext}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <button
          className={
            'btn flex items-center font-light mr-4 hover:text-primary-color'
          }
        >
          <p className={'mr-2'}>See more</p>{' '}
          <FontAwesomeIcon icon={faChevronRight} className={'!text-xxs'} />
        </button>
      </div>
      <div className={'flex flex-col'}>{attachRefs(children)}</div>
    </div>
  );
};

export default Showcase;

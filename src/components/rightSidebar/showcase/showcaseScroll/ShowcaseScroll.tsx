import React, { forwardRef } from 'react';

interface ShowcaseScrollProps {
  children: React.ReactNode;
}

const ShowcaseScroll = forwardRef<HTMLDivElement, ShowcaseScrollProps>(
  ({ children }, ref) => {
    return (
      <div className="showcase-scroll flex" ref={ref}>
        {children}
      </div>
    );
  },
);

ShowcaseScroll.displayName = 'ShowcaseScroll';

export default ShowcaseScroll;

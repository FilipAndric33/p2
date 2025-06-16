import React, { forwardRef } from 'react';

interface ShowcaseScrollProps {
  children: React.ReactNode;
}

const ShowcaseScroll = forwardRef<HTMLDivElement, ShowcaseScrollProps>(
  ({ children }, ref) => {
    return (
      <div
        className="overflow-x-auto scroll-smooth whitespace-nowrap snap-x snap-mandatory scroll-n scrollbar-hide flex"
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

ShowcaseScroll.displayName = 'ShowcaseScroll';

export default ShowcaseScroll;

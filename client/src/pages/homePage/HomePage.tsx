import React, { useState, useRef } from 'react';
import MovieList from '../../components/movieList/MovieList';
import Navbar from '../../components/navbar/Navbar';
import LeftSidebar from '../../components/leftSidebar/LeftSidebar';
import RightSidebar from '../../components/rightSidebar/RightSidebar';
import { useSidebarVisibility } from '../../hooks/useSidebarVisibility';
import { useLocation } from 'react-router-dom';
import ToastMessage from '../../components/toastMessage/ToastMessage';
import { useToastMessageTimer } from '../../hooks/useToastMessageTimer';

const HomePage: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const location = useLocation();
  const [toastMessage, setToastMessage] = useState<string>(location.state);
  useToastMessageTimer({ toastMessage, setToastMessage });

  useSidebarVisibility({ openMenu, setOpenMenu, sidebarRef });

  return (
    <>
      <div className={'flex home-page'}>
        {toastMessage ? <ToastMessage message={toastMessage} /> : ''}
        <div
          className={`left-sidebar${openMenu ? '-visible' : ' '}`}
          ref={sidebarRef}
        >
          <LeftSidebar />
        </div>
        <div className="flex column center-container space-between">
          <Navbar setOpenMenu={setOpenMenu} />
          <MovieList />
        </div>
        <div className={'right-sidebar flex column space-between'}>
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default HomePage;

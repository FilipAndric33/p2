import React, { useState, useRef } from 'react';
import TVShowList from '../../components/tvShowList/tvShowList';
import MovieList from '../../components/movieList/MovieList';
import Navbar from '../../components/navbar/Navbar';
import LeftSidebar from '../../components/leftSidebar/LeftSidebar';
import RightSidebar from '../../components/rightSidebar/RightSidebar';
import { useSidebarVisibility } from '../../hooks/useSidebarVisibility';

const HomePage: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    'movies' | 'shows' | 'anime'
  >('movies');
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useSidebarVisibility({ openMenu, setOpenMenu, sidebarRef });

  const renderContent = () => {
    switch (selectedCategory) {
      case 'movies':
        return <MovieList />;
      case 'shows':
        return <TVShowList />;
      case 'anime':
        return;
      default:
        return <MovieList />;
    }
  };

  return (
    <>
      <div className={'flex home-page'}>
        <div className={'left-sidebar flex space-between'} ref={sidebarRef}>
          <LeftSidebar openMenu={openMenu} />
        </div>
        <div className="flex column center-container">
          <Navbar
            setSelectedCategory={setSelectedCategory}
            setOpenMenu={setOpenMenu}
          />
          {renderContent()}
        </div>
        <div className={'right-sidebar flex column space-between'}>
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default HomePage;

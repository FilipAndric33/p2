import React, { useState, useRef } from 'react';
import TVShowList from '../../components/tvShowList/tvShowList';
import Navbar from '../../components/navbar/Navbar';
import LeftSidebar from '../../components/leftSidebar/LeftSidebar';
import RightSidebar from '../../components/rightSidebar/RightSidebar';
import { useSidebarVisibility } from '../../hooks/useSidebarVisibility';

const ShowPage: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useSidebarVisibility({ openMenu, setOpenMenu, sidebarRef });

  return (
    <>
      <div className={'flex home-page'}>
        <div
          className={`left-sidebar${openMenu ? '-visible' : ' '}`}
          ref={sidebarRef}
        >
          <LeftSidebar />
        </div>
        <div className="flex column center-container space-between">
          <Navbar setOpenMenu={setOpenMenu} />
          <TVShowList />
        </div>
        <div className={'right-sidebar flex column space-between'}>
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default ShowPage;

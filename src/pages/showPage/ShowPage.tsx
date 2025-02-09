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
      <div className={'h-full w-full flex flex-1 flex-row'}>
        <div
          className={`h-full gap-4 px-2 font-light mr-6 ${openMenu ? '-visible' : ' '}`}
          ref={sidebarRef}
        >
          <LeftSidebar />
        </div>
        <div className="flex flex-col justify-between w-full px-8">
          <Navbar setOpenMenu={setOpenMenu} />
          <TVShowList />
        </div>
        <RightSidebar />
      </div>
    </>
  );
};

export default ShowPage;

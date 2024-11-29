import React, { useEffect } from 'react';
import Menu from './menu/Menu';
import Library from './library/Library';
import General from './general/General';
import './style/index.scss';

interface Props {
  openMenu: boolean;
}

const LeftSidebar: React.FC<Props> = ({ openMenu }) => {
  useEffect(() => {
    console.log(openMenu);
  }, []);

  return (
    <div className={`left-sidebar-${openMenu ? 'visible' : ''}`}>
      <div className={'logo-container flex align-items'}>
        <img src={'honey-logo.png'} alt={'logo'} />
        <div className={'logo-text'}>
          Honey <br />
          Movies
        </div>
      </div>
      <Menu />
      <Library />
      <General />
    </div>
  );
};

export default LeftSidebar;

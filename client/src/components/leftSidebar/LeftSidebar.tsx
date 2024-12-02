import React from 'react';
import Menu from './menu/Menu';
import Library from './library/Library';
import General from './general/General';
import './style/index.scss';

const LeftSidebar = () => {
  return (
    <div>
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

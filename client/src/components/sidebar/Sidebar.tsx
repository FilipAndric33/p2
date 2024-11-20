import React from 'react';
import Menu from './menu/Menu';
import Library from './library/Library';
import General from './general/General';
import './style/index.scss';

const Sidebar = () => {
  return (
    <div className={'sidebar flex column space-between'}>
      <div className={'logo-container flex align-items'}>
        <img src={'honey-logo.png'} />
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

export default Sidebar;

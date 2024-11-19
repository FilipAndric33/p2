import React from 'react';
import Menu from './menu/Menu';
import Library from './library/Library';
import General from './general/General';
import './style/index.scss';

const Sidebar = () => {
  return (
    <div className={'sidebar flex column space-between'}>
      <div>
        <img src={'honey-logo.png'} /><p>Honey Movies</p>
      </div>
      <Menu />
      <Library />
      <General />
    </div>
  );
};

export default Sidebar;

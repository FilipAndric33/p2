import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck, faCompass } from '@fortawesome/free-regular-svg-icons';

const Menu = () => {
  return (
    <div className={'menu flex column'}>
      <p className={'sidebar-title'}>Menu</p>
      <button className={'flex sidebar-button'}>
        <FontAwesomeIcon icon={faHouse} />
        <p>Home</p>
      </button>
      <button className={'flex sidebar-button'}>
        <FontAwesomeIcon icon={faCompass} />
        <p>Discover</p>
      </button>
      <button className={'flex sidebar-button'}>
        <FontAwesomeIcon icon={faTrophy} />
        <p>Awards</p>
      </button>
      <button className={'flex sidebar-button'}>
        <FontAwesomeIcon icon={faCircleCheck} />
        <p>Celebrities</p>
      </button>
    </div>
  );
};

export default Menu;

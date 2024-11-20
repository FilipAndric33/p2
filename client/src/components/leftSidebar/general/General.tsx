import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faDoorOpen } from '@fortawesome/free-solid-svg-icons';

const General = () => {
  return (
    <div className={'general flex column'}>
      <p className={'sidebar-title'}>General</p>
      <button className={'flex sidebar-button'}>
        <FontAwesomeIcon icon={faGear} />
        <p>Settings</p>
      </button>
      <button className={'flex sidebar-button'}>
        <FontAwesomeIcon icon={faDoorOpen} />
        <p>Log out</p>
      </button>
    </div>
  );
};

export default General;

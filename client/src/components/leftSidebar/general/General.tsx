import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

const General = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('accessToken');
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  const handleLogout = () => {
    if (!isLoggedIn) {
      return;
    }
    localStorage.clear();
    setIsLoggedIn(false);
    const message = 'User logged out successfully';
    navigate('/', { state: message });
    if (location.pathname == '/') {
      window.location.reload();
    }
  };

  return (
    <div className={'general flex column'}>
      <p className={'sidebar-title'}>General</p>
      <button className={'flex sidebar-button'}>
        <FontAwesomeIcon icon={faGear} />
        <p>Settings</p>
      </button>
      {token ? (
        <button className={'flex sidebar-button'} onClick={handleLogout}>
          <FontAwesomeIcon icon={faDoorOpen} />
          <p>Log out</p>
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};

export default General;

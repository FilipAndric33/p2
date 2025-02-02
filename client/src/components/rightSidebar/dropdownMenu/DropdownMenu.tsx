import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useFindUsername } from '../../../hooks/useFindUsername';
import { useNavigate } from 'react-router-dom';

const DropdownMenu = () => {
  const username = useFindUsername();
  const navigate = useNavigate();

  return (
    <div className={'user-box flex'}>
      <FontAwesomeIcon icon={faBell} />
      <div className={'dropdown-container flex'}>
        <ul className={'dropdown-menu'}>
          {username ? (
            <>
              <li>
                {username}
                <FontAwesomeIcon icon={faChevronDown} />
              </li>
              <ul className={'dropdown-list'}>
                <li>Log out</li>
              </ul>
            </>
          ) : (
            <>
              <li>
                guest
                <FontAwesomeIcon icon={faChevronDown} />
              </li>
              <ul className={'dropdown-list'}>
                <li onClick={() => navigate('/login')}>Log in</li>
                <li onClick={() => navigate('/register')}>Register</li>
              </ul>
            </>
          )}
        </ul>
      </div>
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
};

export default DropdownMenu;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { userStore } from '../../../stores/userStore';

const DropdownMenu: React.FC = () => {
  const username = userStore((state) => state.username);
  const { toggleLoggedIn } = userStore();
  const navigate = useNavigate();

  return (
    <div className={'flex max-h-8 justify-between items-center'}>
      <FontAwesomeIcon icon={faBell} className={'!text-2xl'} />
      <div className={'w-full flex justify-end items-center text-xl'}>
        <ul className={'btn flex group relative'}>
          {username ? (
            <>
              <li className={'btn hover:text-primary-color'}>
                {username}
                <FontAwesomeIcon icon={faChevronDown} />
              </li>
              <ul
                className={
                  'btn hidden absolute top-full right-0 group-hover:block'
                }
              >
                <li
                  onClick={() => toggleLoggedIn()}
                  className={
                    'btn text-center rounded-md hover:text-primary-color hover:bg-secondary-color-light px-3'
                  }
                >
                  Log out
                </li>
              </ul>
            </>
          ) : (
            <>
              <li className={'btn hover:text-primary-color'}>
                Guest
                <FontAwesomeIcon icon={faChevronDown} />
              </li>
              <ul
                className={
                  'btn hidden absolute top-full right-0 group-hover:block'
                }
              >
                <li
                  onClick={() => navigate('/login')}
                  className={
                    'btn text-center rounded-md hover:text-primary-color hover:bg-secondary-color-light'
                  }
                >
                  Log in
                </li>
                <li
                  onClick={() => navigate('/register')}
                  className={
                    'btn text-center px-2 rounded-md hover:text-primary-color hover:bg-secondary-color-light'
                  }
                >
                  Register
                </li>
              </ul>
            </>
          )}
        </ul>
      </div>
      <FontAwesomeIcon icon={faUser} className={'!text-2xl !ml-4'} />
    </div>
  );
};

export default DropdownMenu;

import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useFindUsername } from '../../hooks/useFindUsername';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const username = useFindUsername();

  const handleIsOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, [setIsOpen]);

  return (
    <div className={'user flex'} style={{ position: 'relative' }}>
      <FontAwesomeIcon icon={faBell} />
      <ul
        className={'flex username'}
        style={{ position: 'absolute', right: '15%' }}
        onClick={handleIsOpen}
      >
        {username ? (
          <>
            <li>
              {username}
              <FontAwesomeIcon icon={faChevronDown} />
            </li>
            {isOpen ? <li>Log out</li> : <></>}
          </>
        ) : (
          <>
            <li>
              guest
              <FontAwesomeIcon icon={faChevronDown} />
            </li>
            {isOpen ? (
              <>
                <li>Log in</li>
                <li>Register</li>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </ul>
      <FontAwesomeIcon
        icon={faUser}
        style={{ position: 'absolute', right: 0 }}
      />
    </div>
  );
};

export default DropdownMenu;

import React from 'react';
import {
  faMagnifyingGlass,
  faFilter,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

interface NavbarProps {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ setOpenMenu }) => {
  const handleHamburgerClick = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div
      className={'flex justify-between max-h-8 items-center w-full mt-12 mb-4'}
    >
      <FontAwesomeIcon
        icon={faBars}
        className={'!hidden'}
        onClick={handleHamburgerClick}
      />
      <Link to={'/'} className={'btn nav-btn'}>
        Movies
      </Link>
      <Link to={'/ShowPage'} className={'btn nav-btn'}>
        TV Shows
      </Link>
      <Link to={'/Anime'} className={'btn nav-btn'}>
        Anime
      </Link>
      <div
        className={
          'flex gap-1 items-center py-2 px-4 rounded-md bg-[rgb(33,36,45)]  '
        }
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className={'nav-icon'} />
        <input placeholder={'search'} />
        <FontAwesomeIcon icon={faFilter} className={'nav-icon'} />
      </div>
    </div>
  );
};

export default Navbar;

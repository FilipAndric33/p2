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
      <Link to={'/'} className={'nav-button'}>
        Movies
      </Link>
      <Link to={'/ShowPage'} className={'nav-button'}>
        TV Shows
      </Link>
      <Link to={'/Anime'} className={'nav-button'}>
        Anime
      </Link>
      <div className={'flex items-center'}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={'nav-icon'} />
        <input placeholder={'search'} />
        <FontAwesomeIcon icon={faFilter} className={'nav-icon'} />
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import './style/index.scss';
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
    <div className={'navbar flex space-between'}>
      <FontAwesomeIcon
        icon={faBars}
        className={'hamburger-menu'}
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
      <div className={'search-box flex'}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={'nav-icon'} />
        <input placeholder={'search'} />
        <FontAwesomeIcon icon={faFilter} className={'nav-icon'} />
      </div>
    </div>
  );
};

export default Navbar;

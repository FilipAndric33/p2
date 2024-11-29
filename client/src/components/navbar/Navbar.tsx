import React from 'react';
import './style/index.scss';
import {
  faMagnifyingGlass,
  faFilter,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NavbarProps {
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<'movies' | 'shows' | 'anime'>
  >;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({
  setSelectedCategory,
  setOpenMenu,
}) => {
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
      <button
        className={'nav-button'}
        onClick={() => setSelectedCategory('movies')}
      >
        Movies
      </button>
      <button
        className={'nav-button'}
        onClick={() => setSelectedCategory('shows')}
      >
        TV Shows
      </button>
      <button
        className={'nav-button'}
        onClick={() => setSelectedCategory('anime')}
      >
        Anime
      </button>
      <div className={'search-box flex'}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={'nav-icon'} />
        <input placeholder={'search'} />
        <FontAwesomeIcon icon={faFilter} className={'nav-icon'} />
      </div>
    </div>
  );
};

export default Navbar;

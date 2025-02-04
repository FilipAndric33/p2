import {
  faClock,
  faStar,
  faHeart,
  faSquareCheck,
} from '@fortawesome/free-regular-svg-icons';
import { faDownload, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Library = () => {
  return (
    <div className={'library flex column'}>
      <p className={'sidebar-title'}>Library</p>
      <button className={'flex sidebar-button'}>
        <FontAwesomeIcon icon={faClock} />
        <p>recent</p>
      </button>
      <button className={'flex sidebar-button'}>
        <FontAwesomeIcon icon={faStar} />
        <p>Top rated</p>
      </button>
      <button className={'flex sidebar-button'}>
        <FontAwesomeIcon icon={faDownload} />
        <p>Downloaded</p>
      </button>
      <button className={'flex sidebar-button'}>
        <FontAwesomeIcon icon={faHeart} />
        <p>Playlist</p>
      </button>
      <button className={'flex sidebar-button'}>
        <FontAwesomeIcon icon={faSquarePlus} />
        <p>Watchlist</p>
      </button>
      <button className={'flex sidebar-button'}>
        <FontAwesomeIcon icon={faSquareCheck} />
        <p>Completed</p>
      </button>
    </div>
  );
};

export default Library;

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
    <div className={'library flex flex-col flex-1'}>
      <p className={'mt-4 mb-2 font-light'}>Library</p>
      <button className={'flex items-center btn left-sidebar-btn'}>
        <FontAwesomeIcon icon={faClock} className={'!mr-1'} />
        <p>recent</p>
      </button>
      <button className={'flex items-center btn left-sidebar-btn'}>
        <FontAwesomeIcon icon={faStar} className={'!mr-1'} />
        <p>Top rated</p>
      </button>
      <button className={'flex items-center btn left-sidebar-btn'}>
        <FontAwesomeIcon icon={faDownload} className={'!mr-1'} />
        <p>Downloaded</p>
      </button>
      <button className={'flex items-center btn left-sidebar-btn'}>
        <FontAwesomeIcon icon={faHeart} className={'!mr-1'} />
        <p>Playlist</p>
      </button>
      <button className={'flex items-center btn left-sidebar-btn'}>
        <FontAwesomeIcon icon={faSquarePlus} className={'!mr-1'} />
        <p>Watchlist</p>
      </button>
      <button className={'flex items-center btn left-sidebar-btn'}>
        <FontAwesomeIcon icon={faSquareCheck} className={'!mr-1'} />
        <p>Completed</p>
      </button>
    </div>
  );
};

export default Library;

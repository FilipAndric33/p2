import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck, faCompass } from '@fortawesome/free-regular-svg-icons';

const Menu = () => {
  return (
    <div className={'flex flex-col flex-1'}>
      <p className={'mt-4 mb-2 font-thin'}>Menu</p>
      <button className={'flex items-center btn left-sidebar-btn'}>
        <FontAwesomeIcon icon={faHouse} className={'!mr-1'} />
        <p>Home</p>
      </button>
      <button className={'flex items-center btn left-sidebar-btn'}>
        <FontAwesomeIcon icon={faCompass} className={'!mr-1'} />
        <p>Discover</p>
      </button>
      <button className={'flex items-center btn left-sidebar-btn'}>
        <FontAwesomeIcon icon={faTrophy} className={'!mr-1'} />
        <p>Awards</p>
      </button>
      <button className={'flex items-center btn left-sidebar-btn'}>
        <FontAwesomeIcon icon={faCircleCheck} className={'!mr-1'} />
        <p>Celebrities</p>
      </button>
    </div>
  );
};

export default Menu;

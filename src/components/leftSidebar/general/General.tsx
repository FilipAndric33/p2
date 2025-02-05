import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { userStore } from '../../../stores/userStore';

const General = () => {
  const isLoggedIn = userStore((state) => state.isLoggedIn);
  const { toggleLoggedIn } = userStore();

  return (
    <div className={'flex flex-col flex-1'}>
      <p className={'mt-4 mb-2'}>General</p>
      <button className={'flex items-center btn left-sidebar-btn'}>
        <FontAwesomeIcon icon={faGear} className={'!mr-1'} />
        <p>Settings</p>
      </button>
      {isLoggedIn ? (
        <button
          className={'flex items-center btn left-sidebar-btn'}
          onClick={() => toggleLoggedIn()}
        >
          <FontAwesomeIcon icon={faDoorOpen} className={'!mr-1'} />
          <p>Log out</p>
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};

export default General;

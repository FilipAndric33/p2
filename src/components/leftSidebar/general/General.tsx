import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { userStore } from '../../../stores/userStore';

const General = () => {
  const isLoggedIn = userStore((state) => state.isLoggedIn);
  const { toggleLoggedIn } = userStore();

  return (
    <div className={'flex column'}>
      <p className={'sidebar-title'}>General</p>
      <button className={'flex sidebar-button'}>
        <FontAwesomeIcon icon={faGear} />
        <p>Settings</p>
      </button>
      {isLoggedIn ? (
        <button
          className={'flex sidebar-button'}
          onClick={() => toggleLoggedIn()}
        >
          <FontAwesomeIcon icon={faDoorOpen} />
          <p>Log out</p>
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};

export default General;

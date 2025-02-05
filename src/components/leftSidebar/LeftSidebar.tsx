import Menu from './menu/Menu';
import Library from './library/Library';
import General from './general/General';

const LeftSidebar = () => {
  return (
    <div className={'justify-center mx-4 my-8'}>
      <div className={'flex align-middle mb-4'}>
        <img src={'honey-logo.png'} alt={'logo'} className={'min-w-16'} />
        <div className={'text-primary-color font-luckiest text-2xl'}>
          Honey <br />
          Movies
        </div>
      </div>
      <div className={'pl-2'}>
        <Menu />
        <Library />
        <General />
      </div>
    </div>
  );
};

export default LeftSidebar;

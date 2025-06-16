import AppRouter from './routes/routes.tsx';
import './index.css';

function App() {
  return (
    <div className={'flex w-full h-full'}>
      <img
        src={'/background-comb.png'}
        className={'absolute -z-1 opacity-70'}
        alt={'background image'}
      />
      <img
        src={'/background-comb.png'}
        className={
          'absolute -z-1 opacity-70 -translate-x-1/20 translate-y-2/5 -rotate-[120deg]'
        }
        alt={'background img'}
      />
      <AppRouter />
    </div>
  );
}

export default App;

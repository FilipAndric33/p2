import AppRouter from "./routes/routes.tsx";

function App() {
  return (
      <div>
          <img
              src={'/background-comb.png'}
              className={'body-image'}
              alt={'background image'}
          />
          <img
              src={'/background-comb.png'}
              className={'body-image'}
              alt={'background img'}
          />
          <AppRouter/>
      </div>
  )
}

export default App;

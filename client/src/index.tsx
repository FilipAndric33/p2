import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './routes/routes';
import './styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
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
      <AppRouter />
    </div>
  </StrictMode>,
);

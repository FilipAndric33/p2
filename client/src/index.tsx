import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/routes';
import "./styles/index.scss";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div>
            <AppRouter />
        </div>
    </StrictMode>
);
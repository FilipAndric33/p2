import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/routes';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div>
            <AppRouter />
        </div>
    </StrictMode>,
)
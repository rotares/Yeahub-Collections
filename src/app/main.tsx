import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router, StoreProvider } from './providers';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <Router />
    </StoreProvider>
  </StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import { Provider } from './providers/Provider';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider />
    </StrictMode>,
  );
} else {
  console.error('Root element not found');
}
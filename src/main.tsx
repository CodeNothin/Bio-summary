// =====================================================================
// Entry point. Loads the site styles, registers every widget
// (widgets/all.ts), then mounts <App /> into the <div id="root"> of
// index.html.
// =====================================================================
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles.css';
import './widgets/all';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

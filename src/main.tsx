import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/inter/400.css';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { AppRouter } from './router/AppRouter';

const RootApp = () => (
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RootApp />);


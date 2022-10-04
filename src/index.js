import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppSettingsProvider from './context/AppSettingsContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppSettingsProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>

    </AppSettingsProvider>
  </React.StrictMode>
);


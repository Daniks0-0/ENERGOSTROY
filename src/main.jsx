import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router'; // Используем react-router-dom
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/ENERGOSTROY'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
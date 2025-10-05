import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import StoreContextProvider from './context/StoreContext.jsx';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
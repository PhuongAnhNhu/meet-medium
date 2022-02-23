import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './Routes';
import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes></AppRoutes>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

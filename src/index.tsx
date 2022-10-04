import React from 'react';
import ReactDOM from 'react-dom/client';
import "./reset.css"
import './index.css';

// component
import App from './App';

// redux
import store from './Redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
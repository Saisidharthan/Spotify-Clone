import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StateProvider } from './Utils/StateProvider';
import reducer, { initialState } from './Utils/reducer';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

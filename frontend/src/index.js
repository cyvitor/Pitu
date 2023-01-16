import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'

library.add(faCheckSquare);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


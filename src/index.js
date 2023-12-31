import React from 'react';
import ReactDOM from 'react-dom';

// Router and Redux setup setup start
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import { store } from './store/reducers/index'

const app = (
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
);

ReactDOM.render(app ,document.getElementById('root'));
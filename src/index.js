import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import {theme} from "./theme/config";
import { ThemeProvider } from '@emotion/react';
import { RTL } from './RTLConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RTL>
      <Provider store={store}>
        <App />
      </Provider>
    </RTL>
  </ThemeProvider>
);


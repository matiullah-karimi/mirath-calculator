import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { TranslationProvider } from './translation'

const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang');

ReactDOM.render(
  <TranslationProvider lang={lang}>
    <App />
  </TranslationProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

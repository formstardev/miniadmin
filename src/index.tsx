import React from 'react';
import ReactDOM from 'react-dom';
import { ProvideLayout } from './contexts';
import './assets/css'
import reportWebVitals from './reportWebVitals';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
      <ProvideLayout>
        <Routes />
      </ProvideLayout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

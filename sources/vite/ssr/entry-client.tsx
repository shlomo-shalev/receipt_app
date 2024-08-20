import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Bootstrap
import App from '../../../app/View/App';

ReactDOM.hydrateRoot(
  document.getElementById('app')!,
  <BrowserRouter basename={process.env.BASE || ''}>
      <div style={{height: '100%'}}>
        <App />
      </div>
  </BrowserRouter>,
);
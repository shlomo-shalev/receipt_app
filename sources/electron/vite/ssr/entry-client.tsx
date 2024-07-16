import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../../app/View/App';
import * as React from 'react';

ReactDOM.hydrateRoot(
  document.getElementById('app')!,
  <BrowserRouter>
    <div style={{minHeight: '100vh'}}>
      <App />
    </div>
  </BrowserRouter>,
);
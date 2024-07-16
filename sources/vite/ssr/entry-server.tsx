import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../../../app/View/App';

export function SSRRender({ path }) {
  
  return ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <div className='h-full' style={{minHeight: '100vh'}}>
        <App />
      </div>
    </StaticRouter>,
  );
}
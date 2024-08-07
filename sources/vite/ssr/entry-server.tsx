import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../../../app/View/App';

export function SSRRender({ path }) {
  
  return ReactDOMServer.renderToString(
    <StaticRouter location={path}>
    <div style={{height: '100%'}}>
    <App />
      </div>
    </StaticRouter>,
  );
}
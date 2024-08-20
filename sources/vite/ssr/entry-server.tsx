import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

// Bootstrap
import App from '../../../app/View/App';

export function SSRRender({ path, base }) {  
  return ReactDOMServer.renderToString(
    <StaticRouter 
      location={path} 
      basename={base || ''}
    >
      <div style={{height: '100%'}}>
        <App />
      </div>
    </StaticRouter>,
  );
}
import React from 'react';

export default function Container({children = null, classes = '', style = {}, ...props})
{
  return (
    <div 
      style={{...style}} 
      className={`box-content ${classes}`}
      {...props}
    >
      {children}
    </div>
  );
}
import React, { forwardRef } from 'react';

const Container = (
  {children = null, classes = '', style = {}, ...props},
  ref
) =>
{
    return (
      <div 
        style={{...style}} 
        className={`box-content ${classes}`}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
};


export default forwardRef(Container);
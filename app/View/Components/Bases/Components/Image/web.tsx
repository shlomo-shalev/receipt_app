import React, { forwardRef } from 'react';

const Image = ({
  children = undefined, src, classes = '',style = {}, 
  width = null, height = null, ...props
}, ref) => {

  const finalWidth = width || 50;

  return (
    <img
      src={src}
      className={classes}
      ref={ref}
      {...props}
      style={{
        ...style,
        width: finalWidth,
        height,
      }}
    />
  );
};

export default forwardRef(Image);
import React from 'react';

const Image = ({
  children = undefined, src, classes = '',style = {}, 
  width = null, height = null, ...props
}) => {

  const finalWidth = width || 50;

  return (
    <img
      src={src}
      className={classes}
      {...props}
      style={{
        ...style,
        width: finalWidth,
        height,
      }}
    />
  );
};

export default Image;
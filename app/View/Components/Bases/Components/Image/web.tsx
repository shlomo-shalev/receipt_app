import React from 'react';

const Image = ({children = undefined, src, classes = '', ...props}, ref) => {
  return (
    <img
      src={src}
      ref={ref}
      className={classes}
      {...props}
    />
  );
};

export default React.forwardRef(Image);
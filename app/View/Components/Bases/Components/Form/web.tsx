import React from 'react';

export default function Form({children = undefined, style = {}, action = '/', ...props}) {
  
  return (
    <form
      style={{...style}}
      action={action}
      {...props}
    >
      {children}
    </form>
  );
}
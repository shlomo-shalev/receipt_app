import React, { useState } from 'react';

export default function CheckBox({children = undefined, style = {}, check = false, ...props}) {
  const [state, setState] = useState({check});
  
  return (
    <input
      style={{...style}}
      value={state.check ? 1 : 0}
      type="checkbox"
      onClick={el => setState(state => ({...state, check: el.target.checked}))}
      {...props}
    />
  );
}
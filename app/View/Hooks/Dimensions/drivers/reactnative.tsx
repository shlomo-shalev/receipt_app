// Tools
import { useEffect, useState } from "react";

export function getElementDimensions(ref) : {width: Number, height: Number} 
{
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {    
    (async () => {
      await new Promise((res) => setTimeout(res, 100));
      
      ref.current.measure((x, y, width, height, pageX, pageY) => {
        setDimensions({ width, height });
      });
    })()
  }, []);

  return dimensions;
}

export default {
  getElementDimensions,
};

// Tools
import { useEffect, useState } from "react";

export function getElementDimensions(ref) : {width: Number, height: Number} 
{
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const { width, height } = ref.current.getBoundingClientRect();

    setDimensions({ width, height });
  }, []);

  return dimensions;
}

export default {
  getElementDimensions,
};

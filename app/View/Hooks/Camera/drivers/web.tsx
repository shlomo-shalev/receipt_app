import { useEffect, useState } from "react";

export function requestPermisstion() : Function {
  return async () => {
    let allow = true;

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        stream.getTracks().forEach(track => track.stop());        
    }
    catch (ex) {
        allow = false;
    }

    return allow;
  }
}

export function cameraExists() : boolean {
  const [exists, setExists] = useState(false);

  useEffect(() => {
    (async () => {
      let devices = await navigator.mediaDevices.enumerateDevices();
      devices = devices.filter(device => device.kind === 'videoinput');

      setExists(devices.length > 0);
    })()
  });

  return exists;
}

export default {
    requestPermisstion,
    cameraExists,
};

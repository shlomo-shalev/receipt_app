import React, { useEffect, useRef } from 'react';

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

export default function Camera({ takePictureRef }) {

  const videoRef = useRef(null);

  var handleTakePicture = () => {
    var canvas = document.createElement("canvas");
    canvas.width = 700;
    canvas.height = 500;

    canvas.getContext('2d').drawImage(videoRef.current, 0, 0, 700, 500);
    return canvas.toDataURL('image/png');
  }

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
       facingMode: 'user'
      }
    }).then(function success(stream) {
      videoRef.current.srcObject = stream;
    });

    takePictureRef.current = handleTakePicture;

    const videoElement: HTMLVideoElement | undefined = videoRef.current;

    return () => {
  
      if (videoElement && videoElement.srcObject) {  
        (videoElement.srcObject as MediaStream).getTracks().forEach((track: any) => {
          if (track.readyState == 'live') {
            track.stop()
          }
        })
      }
    };
  }, []);

  return (
    <Container classes='h-full'>
      <video width="400" height="500" ref={videoRef} playsInline autoPlay muted />
    </Container>
  );
}
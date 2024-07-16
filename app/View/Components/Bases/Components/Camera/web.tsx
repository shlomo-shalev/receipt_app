// Tools
import React, { useEffect, useRef } from "react";

// base Components
import Container from "../Container/web";

function Camera({ takePictureRef, classes = {root: '', camera: ''} }) {
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
         facingMode: 'user',
         height: { 
            ideal: 1900,
         },
         width: {
            ideal: 1000,
         },
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
      <Container classes={`h-full ${classes.root || ''}`}>
        <video
            className={`${classes.camera || ''}`}
            ref={videoRef} 
            playsInline 
            autoPlay 
            muted 
        />
      </Container>
    );
}

export default Camera;
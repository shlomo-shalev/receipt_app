// Tools
import React, { useEffect, useRef } from "react";

// base Components
import Container from "../Container/web";
import { dataURItoBlob } from "app/Models/Blob/Blob";

function Camera({ 
  takePictureRef, onStarted = () => {}, style = {},
  classes = {root: '', camera: ''}, height = null, width = null
}) {
    const videoRef = useRef(null);

    var handleTakePicture = async () => {
      var canvas = document.createElement("canvas");
      canvas.width = 700;
      canvas.height = 500;
  
      canvas.getContext('2d').drawImage(videoRef.current, 0, 0, 700, 500);

      const dataUrl = canvas.toDataURL('image/png');

      const file = {
        name: new Date().toString(),
        type: 'image/png',
        dataUrl,
        url: URL.createObjectURL(dataURItoBlob(dataUrl)),
        lastModified: new Date().getTime(),
        lastModifiedDate: new Date(),
      };

      return file;
    }
  
    useEffect(() => {
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
         facingMode: 'user',
         height: { 
            ideal: height || 1900,
         },
         width: {
            ideal: width || 1000,
         },
        }
        
      }).then(function success(stream) {
        videoRef.current.srcObject = stream;
        onStarted();
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
      <Container 
        classes={`h-full ${classes.root || ''}`}
        style={style}
      >
        <video
            className={`${classes.camera || ''}`}
            ref={videoRef} 
            playsInline 
            style={{
              height,
            }}
            autoPlay 
            muted 
        />
      </Container>
    );
}

export default Camera;
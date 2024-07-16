import React, { useRef } from 'react';
import Tesseract from 'tesseract.js';

// Bootstrap
import 'app/View/Bootstrap/__DOM_DRIVER__';

import 'route/Demo';

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';
import Button from 'app/View/Components/Bases/Components/Button/__DOM_DRIVER__';

// Complete components
import Camera from 'app/View/Components/Complete/Camera/Camera';

// Pages components
import ScanPage from 'app/View/Components/Pages/ScanPage/ScanPage';

export default function App() {

  const takePictureRef = useRef(() => {});

  return <ScanPage />;

  return (
    <Container classes='h-full'>
      <Container classes='flex flex-col-reverse justify-end overflow-scroll'>
        <Container classes='m-5'>
            <Container classes='px-2'>
              {/* <Space /> */}
              {/* <Camera 
                url={'https://tesseract.projectnaptha.com/img/eng_bw.png'}
              /> */}
              <Camera 
                takePictureRef={takePictureRef}
              />
              <Button 
                onClick={() => {
                  const image = takePictureRef.current();

                  // const url = URL.createObjectURL(dataURItoBlob(window.ddd));
                  const url = URL.createObjectURL(dataURItoBlob(image));
                  /* <input type=file id='vvvv' /> */

                  console.log('url',url );
                  
                  Tesseract.recognize(
                    url,
                    'heb',
                    { logger: m => null }
                  ).then(({ data: { text, ...data } }) => {
                    console.log(data);
                  })
                }}
              >
                Take Picture
              </Button>
            </Container>
        </Container>
      </Container>
    </Container>
  );
}


function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  var ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  var blob = new Blob([ab], {type: mimeString});
  return blob;

}
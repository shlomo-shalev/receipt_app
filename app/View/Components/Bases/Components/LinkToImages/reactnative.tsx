import uuid from "uuid-random";
import RNFS from 'react-native-fs';
import React, { useEffect, useRef, useState } from 'react';

// Base components
import Iframe from 'app/View/Components/Bases/Components/Iframe/reactnative';

const dataUrlToAllData = async (dataUrl) => {
  const id = uuid();
  const filePath = `${RNFS.TemporaryDirectoryPath}/${id}.png`;
  const base64Data = dataUrl.replace(/^data:image\/(png|jpeg);base64,/gi, "");

  await RNFS.writeFile(filePath, base64Data, 'base64');  

  return {
    uri: filePath,
    base64: base64Data,
  };
};


export default function LinkToImages({ src, onConverted, onError, onTryAgainRef }) {
  const iframeRef = useRef(null);
  const waitErrorRef = useRef(null);

  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      clearTimeout(waitErrorRef.current);
    }
  }, [open]);

  useEffect(() => {
    clearTimeout(waitErrorRef.current);

    setOpen(true);

    waitErrorRef.current = setTimeout(() => {
      onError({ message: 'Timeout' });
      setOpen(false);
    }, 20000);
  }, [src]);

  onTryAgainRef.current = () => {
    setOpen(true);
  }

  const handleMessage = async (event) => {
    if (typeof event.nativeEvent.data === 'string') {
      const data = JSON.parse(event.nativeEvent.data);

      if (data?.type === 'message') {
        onError({ message: data.data.message });
      }

      if (data?.type === 'data') {

        const originalPhotos = data.data.photos;
        const type = 'image/png';
        const photos = [];

        try {

          for (const index in originalPhotos) {
            if (Object.prototype.hasOwnProperty.call(originalPhotos, index)) {
              const dataUrl = originalPhotos[index];
              
              const id = uuid();
              const { uri, base64 } = await dataUrlToAllData(dataUrl);

              photos.push({
                id,
                name: `${id}.png`,
                type,
                base64: async function () : Promise<string> {
                  return base64;
                },
                url: uri,
                height: 500,
                dates: async function () : Promise<{lastModified: number, lastModifiedDate: Date}> {
                  const stats = await RNFS.stat(uri);
                  const date = stats.mtime;
              
                  return {
                    lastModified: new Date(date).getTime(),
                    lastModifiedDate: new Date(date),
                  };
                },
              });
            }
          }

          onConverted({ photos });
        }
        catch (error) {
          onError({ message: error });
        }
      }

      setOpen(false);
    }
  };

  return (
    <>
      {open && (
        <Iframe
          src={src}
          height={open ? 1 : 0}
          style={{
            opacity: 0,
          }}
          onError={() => {
            onError({ message: 'onError played' });
            setOpen(false);
            return false;
          }}
          onHttpError={() => {
            onError({ message: 'load page failed' });
            setOpen(false);
            return false;
          }}
          iframeRef={iframeRef}
          injectedJavaScript={(`
              (() => {
                function onError (err) {
                  window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: 'message',
                    data: {
                      message: \`\${err}\`
                    },
                  }));
                }
                
                try {
                  const photos = [];
                  var script = document.createElement('script');
                  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
                  script.onload = async () => {
                    await new Promise(res => setTimeout(res, 2000));
                  
                    document.body.style.pointerEvents = 'none';
                      html2canvas(document.body).then(async canvas => {

                          const ctx = canvas.getContext('2d');
                          const imageHeight = canvas.height;
                          const imageWidth = canvas.width;
                        
                          const partHeight = 1500;
                          let currentPart = 0;
                        
                          while (currentPart * partHeight < imageHeight) {
                            const partCanvas = document.createElement('canvas');
                            partCanvas.width = imageWidth;
                            partCanvas.height = partHeight;
                            const partCtx = partCanvas.getContext('2d');
                        
                            partCtx.drawImage(
                              canvas,
                              0, currentPart * partHeight,
                              imageWidth, partHeight,
                              0, 0,
                              imageWidth, partHeight
                            );
                        
                            const imageDataUrl = await partCanvas.toDataURL('image/png');

                            photos.push(imageDataUrl);
                        
                            currentPart++;
                          }

                          window.ReactNativeWebView.postMessage(JSON.stringify({
                              type: 'data',
                              data: {
                                height: document.documentElement.scrollHeight,
                                photos,
                              },
                            }));

                      }).catch(err => {
                        onError(err);
                      });
                  };
                
                  script.onerror = () => {
                    onError('load package failed');
                  };
                
                  document.head.appendChild(script);
                }
                catch(err) {
                  onError(err);
                }
              })();
          `)}
          onMessage={handleMessage}
          domStorageEnabled={false}
          //onShouldStartLoadWithRequest={() => {}}
        />
      )}
    </>
  );
}
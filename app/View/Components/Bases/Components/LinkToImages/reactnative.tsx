import uuid from "uuid-random";
import RNFS from 'react-native-fs';
import { Dimensions } from "react-native";
import ViewShot from 'react-native-view-shot';
import React, { useEffect, useRef } from 'react';

// Base components
import Iframe from 'app/View/Components/Bases/Components/Iframe/reactnative';
import Container from "app/View/Components/Bases/Components/Container/reactnative";

const dataUrlToUri = async (dataUrl) => {
  const id = uuid();
  const filePath = `${RNFS.TemporaryDirectoryPath}/${id}.jpg`;

  // הסרת prefix של dataUrl (אם קיים)
  const base64Data = dataUrl.replace(/^data:image\/(png|jpeg);base64,/, "");

  await RNFS.writeFile(filePath, base64Data, 'base64');

  return filePath;
};


export default function LinkToImages({ src, onConverted }) {
  const iframeRef = useRef(null);

  const handleMessage = async (event) => {
    
    console.log('e', 'blabla');

    if (typeof event.nativeEvent.data === 'string') {
      const data = JSON.parse(event.nativeEvent.data);

      if (data?.type === 'data') {

        const dataUrl = data.data.dataUrl;
        const height = data.data.height;
        
        const photos = [];
        const type = 'image/png';

        try {
  
          if (!iframeRef.current) return;
          
          const id = uuid();
          const uri = await dataUrlToUri(dataUrl);

          const stats = await RNFS.stat(uri);

          photos.push({
            id,
            name: `${id}.png`,
            type,
            dataUrl,
            url: uri,
            width: '100%',
            height,
            lastModified: new Date(stats.mtime).getTime(),
            lastModifiedDate: new Date(stats.mtime),
          });
          
          onConverted({ photos });
        }
        catch (error) {
          console.error('error', error);
        }
        
      }

    }
  };

  return (
    <>
      <Iframe
          src={src}
          height={1}
          style={{
            opacity: 0,
          }}
          iframeRef={iframeRef}
          onLoadEnd={() => {
            iframeRef.current.injectJavaScript(`
              (() => {
                var script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';

                console.log('?');

                script.onload = async () => {
                  await new Promise(res => setTimeout(res, 2000));

                  document.body.style.pointerEvents = 'none';
                    html2canvas(document.body).then(canvas => {
                      window.ReactNativeWebView.postMessage(JSON.stringify({
                        type: 'data',
                        data: {
                          height: document.documentElement.scrollHeight,
                          dataUrl: canvas.toDataURL(),
                        },
                      }));
                    }).catch(err => {
                      console.error('Error capturing image:', err);
                    });
                };

                script.onerror = () => {
                  console.error('Failed to load html2canvas script');
                };

                document.head.appendChild(script);
                return true;
              })();
            `);
          }}
          onMessage={handleMessage}
          domStorageEnabled={false}
          //onShouldStartLoadWithRequest={() => {}}
      />
    </>
  );
}
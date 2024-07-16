import React, { useEffect, useState } from "react";
import Tesseract from 'tesseract.js';

// Base components
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";
import Image from "app/View/Components/Bases/Components/Image/__DOM_DRIVER__";
import Title from "app/View/Components/Bases/Components/Title/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Complate components
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";
import { createLocalurl, dataURItoBlob } from "app/Models/Blob/Blob";

const TextExtraction = ({ image, hanldeRetakePucture }) => {

  const [state, setState] = useState({
    textData: {
      text: null,
      data: null,
    },
  });

  const { textData } = state;

  useEffect(() => {
    const url = createLocalurl(dataURItoBlob(image.data));
    
    Tesseract.recognize(
      url,
      'heb',
      { 
        logger: m => null,

      }
    ).then(({ data: { text, ...data } }) => {
      setState(state => ({
        ...state,
        textData: {
          text,
          data,
        },
      }));
      console.log('text', text);
      console.log('data', data);
    })
  }, []);

  return (
    <Container classes="flex flex-col justify-center m-10">
            <Container classes="mb-5 flex justify-between">
                <Title>
                    Step 3 - Text extraction and show recipt data.
                </Title>
                <CommonButton 
                    type="filled"
                    title={'Retake'}
                    classes={{
                        root: "mx-0 bg-red-600"
                    }}
                    onClick={() => hanldeRetakePucture()}
                />
              </Container>
            <Container classes="m-auto">
                <Image 
                    src={image.url}
                />
                <Text>
                  {textData.text}
                </Text>
            </Container>
        </Container>
  );
}

export default TextExtraction;
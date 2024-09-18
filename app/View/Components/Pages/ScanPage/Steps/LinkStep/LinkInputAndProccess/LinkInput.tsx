// Tools
import React, { useRef, useState } from "react";

// Complete components
// -- app
import TextInput from "app/View/Components/Complete/MaterialDesign/Form/Input/TextInput";


// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";
import LinkToImages from "app/View/Components/Bases/Components/LinkToImages/__DOM_DRIVER__";

function LinkInput({ onLoading, onCompleted, inputRef }) {
    const timeOutToProccessRef = useRef(null);

    const [src, setSrc] = useState('');

    return (
        <Container>
            {src.length > 0 && (
                <LinkToImages
                    src={src}
                    onError={() => {}}
                    onConverted={({ photos }) => {
                        onCompleted({ photos });
                        // Do onCompleted or you don't get photos or there is any error
                        //  so go to message step to show the error
                    }}
                />
            )}
            <TextInput 
                title="Link"
                classes="mx-2 mt-3"
                onChange={({ text }) => {
                    clearTimeout(timeOutToProccessRef.current);

                    timeOutToProccessRef.current = setTimeout(() => {
                        
                        if (text.length > 0) {
                                const availableToProccess = onLoading();
                                
                                if (availableToProccess) {
                                    setSrc(text);
                                }
                        }
                        
                    }, 1000);

                }}
                inputRef={inputRef}
            />
        </Container>
    );
}

export default LinkInput;
// Tools
import React, { useRef, useState } from "react";

// Complete components
// -- app
import TextInput from "app/View/Components/Complete/MaterialDesign/Form/Input/TextInput";


// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";
import LinkToImages from "app/View/Components/Bases/Components/LinkToImages/__DOM_DRIVER__";

export const checkUrlValid = (url) => {
    const pattern = /^((https|http)?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    return pattern.test(url);
};

function LinkInput({ onLoading, onWait, onCompleted, onTryAgainRef, onError, inputRef }) {
    const timeOutToProccessRef = useRef(null);
    const tryAgainActionRef = useRef(null);

    const [src, setSrc] = useState('');

    onTryAgainRef.current = () => {
        if (tryAgainActionRef) {
            onLoading();
            tryAgainActionRef.current();
        }
    }

    return (
        <Container>
            {src.length > 0 && (
                <LinkToImages
                    src={src}
                    onTryAgainRef={tryAgainActionRef}
                    onError={({ message }) => {
                        onError({ message });
                    }}
                    onConverted={({ photos }) => {
                        onCompleted({ photos });
                    }}
                />
            )}
            <TextInput 
                title="Link"
                classes="mx-2 mt-3"
                onChange={({ text }) => {
                    clearTimeout(timeOutToProccessRef.current);
                                        
                    if (text.length <= 0) {
                        setSrc(text);
                        onWait();
                    }

                    timeOutToProccessRef.current = setTimeout(() => {
                    
                        if (text.length > 0 && checkUrlValid(text)) {
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
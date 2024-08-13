// Tools
import React from "react";

// Base components
import Title from "app/View/Components/Bases/Components/Title/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";
import BaseTextInput from "app/View/Components/Bases/Components/TextInput/__DOM_DRIVER__";

function TextInput({ title, classes = '', inputRef = null }) {
    return (
        <Container classes={classes}>
            <Title 
                classes='m-2 text-base font-bold'
            >
                {title}
            </Title>
            <BaseTextInput 
                classes='
                    border-2 border-black rounded-xl
                '
                inputRef={inputRef}
            />
        </Container>
    );
}

export default TextInput;
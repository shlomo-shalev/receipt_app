// Tools
import React from "react";

// Base components
import Title from "app/View/Components/Bases/Components/Title/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";
import BaseTextAreaInput from "app/View/Components/Bases/Components/TextAreaInput/__DOM_DRIVER__";

function TextAreaInput({ title, classes = '' }) {
    return (
        <Container classes={classes}>
            <Title 
                classes='m-2 !mx-3.5 text-base font-bold'
            >
                {title}
            </Title>
            <BaseTextAreaInput 
                classes='
                    border-2 border-black rounded-xl
                '
            />
        </Container>
    );
}

export default TextAreaInput;
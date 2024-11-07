// Tools
import React from "react";

// Base components
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

function EmptyStep({ classes = '' }) {
    return (
        <Container>
            <Container 
                classes={`
                    bg-gray-300 h-auto border border-black
                    rounded-xl p-5 my-auto 
                `}
            >
                <Text>
                    There isn't images to show...
                </Text>
            </Container>
        </Container>
    );
}

export default EmptyStep;
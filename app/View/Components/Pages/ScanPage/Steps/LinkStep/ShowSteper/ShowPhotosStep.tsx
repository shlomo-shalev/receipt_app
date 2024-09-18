// Tools
import React from "react";

// Base components
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

// Complete components
// -- icons
import FilesList from "app/View/Components/Complete/App/Lists/FilesList/FilesList";

function ShowPhotosStep({ photos }) {
    return (
        <Container classes="mt-5">
            <FilesList 
                files={photos}
                heightInObject
            />
        </Container>
    );
}

export default ShowPhotosStep;
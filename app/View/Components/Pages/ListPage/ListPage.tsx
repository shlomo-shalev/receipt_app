// Tools
import React from "react";

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Complete components
// App widgets
import Category from "app/View/Components/Complete/App/Widgets/Category/Category";

function ListPage() {
    return (
        <Container classes="overflow-y-auto pt-5 h-full">
            <Category title="Food" />
            <Category title="Cleaning" />
            <Category title="Blabla" />
        </Container>
    );
}

export default ListPage;
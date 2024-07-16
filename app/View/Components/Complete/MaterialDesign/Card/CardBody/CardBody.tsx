import React from "react";

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Interfaces
import CardBodyInterface from 'app/View/Components/Complete/MaterialDesign/Card/CardBody/CardBodyInterface';

function CardBody ({ children, classes = {root: ''} }: CardBodyInterface) : JSX.Element
{

    return (
        <Container classes={`py-2 ${classes.root}`}>
          {children}
        </Container>
    );
}

export default CardBody;
import React from "react";

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Interfaces
import CardFooterInterface from 'app/View/Components/Complete/MaterialDesign/Card/CardFooter/CardFooterInterface';

function CardFooter ({ children, classes = {root: ''} }: CardFooterInterface) : JSX.Element
{
    return (
        <Container classes={`py-1 flex flex-row justify-between ${classes.root}`}>
          {children}
        </Container>
    );
}

export default CardFooter;
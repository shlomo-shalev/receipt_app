import React from "react";

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Interfaces
import CardHeaderInterface from 'app/View/Components/Complete/MaterialDesign/Card/CardHeader/CardHeaderInterface';

function CardHeader ({ main, actions = null, classes = {root: ''}, onClick = null }: CardHeaderInterface) : JSX.Element
{
    return (
        <Container 
          classes={`
            py-1 flex flex-row justify-between align-items-center
            ${classes.root}
          `}
          onClick={onClick}
        >
          <Container
            classes="flex align-items-center"
          >
            {main}
          </Container>
          {!!actions && (
            <Container 
              classes="flex items-center"
            >
              {actions}
            </Container>
          )}
        </Container>
    );
}

export default CardHeader;
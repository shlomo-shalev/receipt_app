import React from "react";

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Interfaces
import CardInterface from 'app/View/Components/Complete/MaterialDesign/Card/CardInterface';

const styleForAnotherCardsTypes: {root: object} = {
  root: {
      elevated: 'shadow-sm shadow-gray-400 bg-white',
      filled: 'bg-blue-600',
      outlined: 'bg-white border border-1 border-gray-400',
  } as object,
};

function Card ({ children, classes = {root: ''}, type = 'elevated' }: CardInterface) : JSX.Element
{
    return (
        <Container 
          classes={`
            border border-1 border-gray-500 rounded-xl
            overflow-hidden p-2 
            ${styleForAnotherCardsTypes.root[type]} ${classes.root}
          `}
        >
          {children}
        </Container>
    );
}

export default Card;
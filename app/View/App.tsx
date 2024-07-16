import React from 'react';

// Bootstrap
import 'app/View/Bootstrap/__DOM_DRIVER__';
import Router from 'app/View/Bootstrap/Router/__DOM_DRIVER__';

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Coomplete components
  // app
  import Menu from "app/View/Components/Complete/App/Menu/Menu";

export default function App() {
  return (
    <Container
      classes="h-full bg-gray-400 flex flex-col" 
    >
      {/* <Container classes='overflow-scroll relative'> */}
        <Router />
      {/* </Container> */}
      <Menu />
    </Container> 
  );
}
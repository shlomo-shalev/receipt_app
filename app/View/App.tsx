import React, { useEffect, useState } from 'react';

// Bootstrap
import 'app/View/Bootstrap/__DOM_DRIVER__';
import Router from 'app/View/Bootstrap/Router/__DOM_DRIVER__';

// Base components
import Title from 'app/View/Components/Bases/Components/Title/__DOM_DRIVER__';
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Complete components
  // app
  import Menu from "app/View/Components/Complete/App/Menu/Menu";

// Bootstrap Apis
import init from 'app/View/Bootstrap/init';

// Hooks
import useMode from 'app/View/Hooks/Mode/useMode';

export default function App() {
  const mode = useMode();  
  const isCSR = mode === 'csr';

  const [started, setStarted] = useState(false);
  
  useEffect(() => {(async () => {
    if (isCSR) await init();
    setStarted(true);
  })()}, []);

  if (!started) return (
    <Container classes="h-full bg-gray-600 flex justify-center">
      <Title classes="text-center m-auto">
        The app is loading!...
      </Title>
    </Container>
  );

  return (
    <Container
      classes="h-full bg-gray-600 flex flex-col"
    >
      <Router />
      <Menu />
    </Container> 
  );
}
import React from 'react';
import { AnimalFunFacts } from './components/AnimalFunFacts';
import { BackgroundImage } from './components/BackgroundImage';
import { Title } from './components/Title';

const showBackground = true;

const App = () => {
  return (
    <>
      <Title />
      {showBackground && <BackgroundImage />}
      <AnimalFunFacts />
    </>
  )
}

export default App

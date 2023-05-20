import React, { useState } from 'react';
import { animals } from '../data/animals';

const AnimalImages = ({ displayFact }) => {
  const images = Object.keys(animals).map(animal => (
    <img
      onClick={displayFact}
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
    />
  ));

  return <div className='animals'>{images}</div>;
};

const FunFacts = ({ fact }) => {
  return <p id='fact'>{fact}</p>;
};

export const AnimalFunFacts = () => {
  const [fact, setFact] = useState('');

  const displayFact = ({ target: { alt } }) => {
    const { facts } = animals[alt];
    const index = Math.floor(Math.random() * facts.length);
    const newFact = facts[index];
    setFact(newFact);
  };

  return (
    <>
      <AnimalImages displayFact={displayFact} />
      <FunFacts fact={fact} />
    </>
  );
};

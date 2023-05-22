import React from 'react';
import { comments } from './data/commentData';
import { Card } from './components/Card'

const App = () => {
  return (
    <>
      {
        comments.map(comment =>
          <Card commentObject={comment} />
        )
      }
    </>
  );
}

export default App;

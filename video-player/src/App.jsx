import React, { useState } from 'react';
import { Menu } from './components/Menu';
import { Video } from './components/Video';
import { VIDEOS } from './data/videos';

const App = () => {
  const [src, setSrc] = useState(VIDEOS.fast);

  const onSelectVideoHandler = (newVideo) => {
    setSrc(VIDEOS[newVideo]);
  }

  return (
    <>
      <h1>Video Player</h1>
      <Menu onSelectVideo={onSelectVideoHandler}/>
      <Video src={src} />
    </>
  );
};

export default App;

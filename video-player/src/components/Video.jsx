import React from 'react';

export const Video = ({ src }) => {
  return <video controls autoPlay muted src={src} />
};

import React from 'react';

export const Header = ({ profileImg, username }) => {
  return (
    <>
      <img src={profileImg} alt={`${username}'s profile picture`} />
      <h1>{username}</h1>
    </>
  );
};

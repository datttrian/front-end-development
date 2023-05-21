import React from 'react';

export const Menu = ({ onSelectVideo }) => {
  const clickHandler = (event) => {
    const name = event.target.value;
    onSelectVideo(name);
  };

  return (
    <form onClick={clickHandler}>
      <input type="radio" name="src" value="fast" defaultChecked /> fast
      <input type="radio" name="src" value="slow" /> slow
      <input type="radio" name="src" value="cute" /> cute
      <input type="radio" name="src" value="eek" /> eek
    </form>
  );
};

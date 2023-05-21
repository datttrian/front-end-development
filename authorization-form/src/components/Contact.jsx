import React, { useState } from 'react';

export const Contact = () => {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }

  const login = (
    <>
      <h1>Try entering &ldquo;swordfish&rdquo;</h1>
      <form onSubmit={handleSubmit}>
        <input type="password"></input>
        <input type="submit" />
      </form>
    </>
  )

  const contactInfo = (
    <>
      <h1>Contact</h1>
      <ul>
        <li>
          client@example.com
        </li>
        <li>
          555.555.5555
        </li>
      </ul>
    </>
  )

  return (
    <div id="authorization">
      {
        authorized ? contactInfo : login
      }
    </div>
  );
}

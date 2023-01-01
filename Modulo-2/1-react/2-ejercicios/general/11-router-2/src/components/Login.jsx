import React from 'react';
import { useState } from 'react';

const Login = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = event.target[0].value;
    const password = event.target[1].value;

    if (user === 'student' && password === '1234abc') {
      localStorage.setItem('isAuthenticated', true);
      setAuthenticated(true);
    }
  };

  return (
    <>
      <h1>Pagina de Login:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          User:
          <input type="text" name="username" />
        </label>
        <br />
        <label htmlFor="">
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default Login;

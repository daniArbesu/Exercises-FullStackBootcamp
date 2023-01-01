import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Private = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setAuthenticated(false);
    //return <Navigate to="/login" />;
  };

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (isAuthenticated) {
    return (
      <>
        <h2>Esta es una página privada 🔒</h2>
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default Private;

import React from 'react';
import UserProfile from '../components/UserProfile';
import { UserContextProvider } from '../context/UserContext';

const Home = (): React.ReactElement => {
  return (
    <div>
      <UserContextProvider>
        <UserProfile />
      </UserContextProvider>
    </div>
  );
};

export default Home;

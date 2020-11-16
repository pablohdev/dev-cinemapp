import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes'

import { FavoriteProvider } from './hooks/favorites'

const App = () => {



  return (
    <FavoriteProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </FavoriteProvider>
  );
};

export default App;

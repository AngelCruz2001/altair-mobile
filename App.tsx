import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
};

export default App;

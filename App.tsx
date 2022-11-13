import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {SafeAreaView, View} from 'react-native';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

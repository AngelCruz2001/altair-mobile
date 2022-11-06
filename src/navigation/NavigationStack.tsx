import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignIn, SignUp} from '../screens';
import {NavigationTab} from './NavigationTab';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  const isSignedIn = true;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isSignedIn ? (
        <>
          <Stack.Screen name="NavigationTab" component={NavigationTab} />
        </>
      ) : (
        <>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default NavigationStack;

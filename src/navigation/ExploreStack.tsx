import {View, Text} from 'react-native';
import React from 'react';
import {StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Explore} from '../screens';

const Stack = createNativeStackNavigator();
const ExploreStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Explore'
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  );
};

export default ExploreStack;

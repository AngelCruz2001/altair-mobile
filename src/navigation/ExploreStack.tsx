import {View, Text} from 'react-native';
import React from 'react';
import {StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Explore, Event} from '../screens';
import {RootStackParamList} from '../types/RootStack.type';

const Stack = createNativeStackNavigator<RootStackParamList>();

const ExploreStack = () => {
  return (
    <Stack.Navigator initialRouteName="Explore">
      <Stack.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Event"
        component={Event}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreStack;

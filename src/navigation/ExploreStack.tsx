import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Explore, Event} from '../screens';
import {RootStackParamList} from '../types/RootStack.type';
import {SearchScreen} from '../screens/search';

const Stack = createNativeStackNavigator<RootStackParamList>();

const ExploreStack = (props: any) => {
  return (
    <Stack.Navigator initialRouteName="Explore" screenOptions={{}}>
      <Stack.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Tickets"
        component={Event}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreStack;

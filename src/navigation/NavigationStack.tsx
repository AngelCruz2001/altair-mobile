import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignIn, SignUp} from '../screens';
import {NavigationTab} from './NavigationTab';
import {useAppDispatch} from '../store/hooks';
import {setTheme} from '../store/ui/uiSlice';
import {darkTheme, theme} from '../theme/globalTheme';
import {setEvents} from '../store/events/eventsSlice';
import {data} from '../data';
import {RootStackParamList} from '../types/RootStack.type';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationStack = () => {
  const isSignedIn = true;
  const dispatch = useAppDispatch();
  const [isDark, setIsDark] = React.useState(false);

  useEffect(() => {
    dispatch(setTheme(isDark ? darkTheme : theme));
    dispatch(setEvents(data));
  }, []);

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

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useLayoutEffect} from 'react';

export const useHideTabBar = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });

    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          height: 95,
          alignItems: 'center',
          justifyContent: 'space-between',
          shadowColor: 'gray',
          shadowOffset: {width: 0, height: 0},
        },
      });
    };
  }, [navigation]);

  return navigation;
};

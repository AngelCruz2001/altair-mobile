import React, {useEffect} from 'react';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {theme} from '../theme/globalTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import ExploreStack from './ExploreStack';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

// Animation
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: 'Events',
    component: ExploreStack,
    icon: 'ios-calendar',
  },
  {
    name: 'ExploreStack',
    component: ExploreStack,
    icon: 'compass',
  },
  {
    name: 'Profile',
    component: ExploreStack,
    icon: 'person',
  },
];

interface TabBarCurstomButtonProps extends BottomTabBarButtonProps {
  item: {
    name: string;
    component: React.FC;
    icon: string;
  };
}

const TabBarCustomButton = ({
  onPress,
  item,
  accessibilityState,
}: TabBarCurstomButtonProps) => {
  const isSelected = accessibilityState!.selected;
  const viewRef = React.useRef<any>(null);

  useEffect(() => {
    isSelected
      ? viewRef.current.animate(
          {0: {scale: 0.5, rotate: '0deg'}, 1: {scale: 1.7, rotate: '360deg'}},
          400,
        )
      : viewRef.current.animate(
          {0: {scale: 1.7, rotate: '360deg'}, 1: {scale: 1, rotate: '0deg'}},
          300,
        );
  }, [isSelected]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Animatable.View
        style={styles.container}
        animation="zoomIn"
        duration={2000}
        ref={viewRef}>
        <Icon
          color={isSelected ? theme.colors.primary : theme.colors.secondary}
          size={30}
          name={item.icon}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

export const NavigationTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          height: 95,
          alignItems: 'center',
          justifyContent: 'space-between',
          shadowColor: 'gray',
          shadowOffset: {width: 0, height: 0},
        },
      })}>
      {tabs.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: props => <TabBarCustomButton {...props} item={tab} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

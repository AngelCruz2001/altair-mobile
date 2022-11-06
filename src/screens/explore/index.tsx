import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../theme/globalTheme';
import UpcomingEvents from '../../components/events/UpcomingEvents';

export const Explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Screen</Text>
      <UpcomingEvents />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.primary,
  },
});

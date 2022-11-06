import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EventUp from './EventUp';
import {data} from '../../data';
import {theme} from '../../theme/globalTheme';

export const UpcomingEvents = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Screen</Text>

      <ScrollView
        horizontal={true}
        style={{paddingVertical: 10, backgroundColor: 'white'}}>
        {data.map(event => (
          <EventUp key={event.id} {...event} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

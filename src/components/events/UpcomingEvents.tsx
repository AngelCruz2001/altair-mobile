import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EventUp from './EventUp';
import {data} from '../../data';

const UpcomingEvents = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {data.map(event => (
          <EventUp key={event.id} {...event} />
        ))}
      </ScrollView>
    </View>
  );
};

export default UpcomingEvents;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 20,
    overflow: 'scroll',
  },
});

import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EventUp from './EventUp';
import {data} from '../../data';
import {theme} from '../../theme/globalTheme';
import {useAppSelector} from '../../store/hooks';

export const UpcomingEvents = () => {
  const {events} = useAppSelector(state => state.events);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Screen</Text>

      <ScrollView
        horizontal={true}
        style={{paddingVertical: 10, backgroundColor: 'white'}}>
        {events?.map(event => (
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
    ...theme.textVariants.header,
    color: theme.colors.primary,
  },
});

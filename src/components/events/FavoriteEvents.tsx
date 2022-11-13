import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../store/hooks';
import EventListItem from './EventListItem';

export const FavoriteEvents = () => {
  const {events} = useAppSelector(state => state.events);

  return (
    <View style={styles.container}>
      {events?.map(event => (
        <EventListItem key={event.id} {...event} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});

import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Card} from '../card';
import moment from 'moment';
import {theme} from '../../theme/globalTheme';
import {IEvent} from '../../interfaces/event.interface';
import TextLocation from './TextLocation';
import Bookmark from './Bookmark';

const EventListItem: FC<IEvent> = event => {
  return (
    <Card key={event.id}>
      <Bookmark id={event.id} isFavorite={event.isFavorite} />

      <View style={styles.eventContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: event.coverPicture}} style={styles.image} />
        </View>

        <View style={styles.information}>
          <Text style={styles.date}>
            {moment(event.date).format('DD MMM')} - {event.startTime}
          </Text>

          <Text style={styles.eventName} ellipsizeMode="tail" numberOfLines={2}>
            {event.title}
          </Text>

          <TextLocation location={event.location} />
        </View>
      </View>
    </Card>
  );
};

export default EventListItem;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginVertical: 20,
  },

  eventContainer: {
    flexDirection: 'row',
    height: 100,
  },
  imageContainer: {
    width: '30%',
    height: '100%',
    borderRadius: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: 0,
    elevation: 0,
  },
  information: {
    paddingLeft: 30,
    flex: 1,
  },
  date: {
    color: theme.colors.secondary,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  eventName: {
    color: theme.colors.primary,
    fontSize: 16,
    marginTop: 8,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

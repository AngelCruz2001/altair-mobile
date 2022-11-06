import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {theme} from '../../theme/globalTheme';
import {useAppSelector} from '../../store/hooks';
import {Card} from '../card';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import {TextEvent} from './TextEvent';

export const FavoriteEvents = () => {
  const {events} = useAppSelector(state => state.events);

  return (
    <View style={styles.container}>
      {events!.map(event => (
        <Card key={event.id}>
          <View style={styles.eventContainer}>
            <View style={styles.imageContainer}>
              <Image source={{uri: event.coverPicture}} style={styles.image} />
            </View>
            <View style={styles.information}>
              <Text style={styles.date}>
                {moment(event.date).format('DD MMM')} - {event.time}
              </Text>
              <Icon name="ios-bookmark" style={styles.pin} />

              <Text
                style={styles.eventName}
                ellipsizeMode="tail"
                numberOfLines={2}>
                {event.title}
              </Text>
              <View style={styles.locationContainer}>
                <Icon
                  style={styles.icon}
                  name="location"
                  size={18}
                  color={theme.colors.gray}
                />
                <Text
                  style={styles.subtitle}
                  ellipsizeMode="tail"
                  numberOfLines={1}>
                  {event.location}
                </Text>
              </View>
            </View>
          </View>
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginTop: 20,
    marginBottom: 20,
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
  pin: {
    color: theme.colors.secondary,
    fontSize: 25,
    position: 'absolute',
    top: 0,
    right: 2,
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
  },
  icon: {
    marginLeft: -5,
  },
  subtitle: {
    color: theme.colors.gray,
    fontSize: 15,
    marginLeft: 5,
    flex: 1,
  },
});

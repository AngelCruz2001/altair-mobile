import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {FC, useState} from 'react';
import {useAppDispatch} from '../../store/hooks';
import {Card} from '../card';
import TextDate from './TextDate';
import TextLocation from './TextLocation';
import {TextTitle} from './TextTitle';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/RootStack.type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {setActiveEvent} from '../../store/events/eventsSlice';
import {IEvent} from '../../interfaces/event.interface';

const EventUp: FC<IEvent> = event => {
  const {title, date, location, coverPicture} = event;
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Explore'>>();

  const goToEvent = () => {
    console.log(navigation);
    dispatch(setActiveEvent(event));
    navigation.navigate('Event');
  };

  return (
    <Card>
      <TouchableOpacity onPress={goToEvent}>
        <View style={styles.imageContainer}>
          <TextDate date={date} />
          <Image source={{uri: coverPicture}} style={styles.image} />
        </View>
        <View style={styles.locationContainer}>
          <TextTitle title={title} location={location} numberOfLines={1} />
          <TextLocation location={location} />
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default EventUp;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  imageContainer: {
    width: 250,
    height: 150,
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

  locationContainer: {
    paddingLeft: 10,
    width: 230,
  },
});

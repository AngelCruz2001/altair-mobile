import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {FC, useContext} from 'react';
import {theme} from '../../theme/globalTheme';
import {useAppSelector} from '../../store/hooks';
import {RootState} from '../../store/store';
import {Card} from '../card';
import moment from 'moment';
import TextDate from './TextDate';
import TextLocation from './TextLocation';
import {TextTitle} from './TextTitle';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/RootStack.type';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
interface EventUpProps {
  id: number;
  date: string;
  title: string;
  description: string;
  coverPicture: string;
  location: string;
  navigation: NativeStackScreenProps<RootStackParamList, 'Event'>['navigation'];
}

const EventUp: FC<EventUpProps> = ({
  id,
  date,
  title,
  description,
  coverPicture,
  location,
  navigation,
}) => {
  const goToEvent = () => {
    console.log(navigation);
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

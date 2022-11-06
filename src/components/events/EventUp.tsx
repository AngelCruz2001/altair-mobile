import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../../theme/globalTheme';

interface EventUpProps {
  id: number;
  date: string;
  title: string;
  description: string;
  coverPicture: string;
  location: string;
}

const EventUp: FC<EventUpProps> = ({
  id,
  date,
  title,
  description,
  coverPicture,
  location,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: coverPicture}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.title}>{location}</Text>
      </View>
    </View>
  );
};

export default EventUp;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    borderColor: colors.primary,
    borderRadius: 10,
  },
  imageContainer: {
    width: 250,
    height: 170,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    marginTop: 10,
    paddingLeft: 20,
  },
  title: {
    color: colors.primary,
    fontSize: 20,
    width: 210,
  },
});

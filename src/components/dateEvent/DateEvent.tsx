import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {theme} from '../../theme/globalTheme';

interface DateEventProps {
  image: string;
  title: string;
  description: string;
}

export const DateEvent: FC<DateEventProps> = ({image, title, description}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.information}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  information: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: theme.colors.foreground,
  },
  description: {
    fontSize: 16,
    color: theme.colors.gray,
  },
});

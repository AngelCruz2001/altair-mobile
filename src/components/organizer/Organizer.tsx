import {StyleSheet, Text, View, ActivityIndicator, Image} from 'react-native';
import React, {FC, useState} from 'react';
import {theme} from '../../theme/globalTheme';

interface OrganizerProps {
  name: string;
  profilePicture: string;
}

export const Organizer: FC<OrganizerProps> = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: props.profilePicture}} style={styles.image} />
      </View>

      <View style={styles.text}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.charge}>Organizer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55,
    marginTop: 10,
  },
  imageContainer: {
    width: 55,
    height: 55,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  name: {
    ...theme.textVariants.header,
    fontSize: 20,
    color: theme.colors.foreground,
  },
  charge: {
    fontSize: 18,
    color: theme.colors.gray,
  },
});

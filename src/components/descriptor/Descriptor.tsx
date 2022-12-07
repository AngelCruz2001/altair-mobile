import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {theme} from '../../theme/globalTheme';
import {autoBatchEnhancer} from '@reduxjs/toolkit';

interface DescriptorProps {
  image: ImageSourcePropType;
  title: string;
  description: string;
}

export const Descriptor: FC<DescriptorProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
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
    marginTop: 15,
    flexDirection: 'row',
  },
  imageContainer: {
    width: 60,
    height: 60,
    // backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    elevation: 1,
  },
  information: {
    marginLeft: 15,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 18,
    paddingBottom: 2,
    color: theme.colors.foreground,
  },
  description: {
    fontSize: 16,
    color: theme.colors.gray,
  },
});

import {StyleSheet, StyleSheetProperties, Text, View} from 'react-native';
import React, {FC} from 'react';
import {theme} from '../../theme/globalTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface TextEventProps {
  title: string;
  location: string;
  numberOfLines: number;
}

export const TextEvent: FC<TextEventProps> = ({
  title,
  location,
  numberOfLines,
}) => {
  return (
    <View style={styles.textContainer}>
      <Text
        style={styles.title}
        ellipsizeMode="tail"
        numberOfLines={numberOfLines}>
        {title}
      </Text>
      <View style={styles.locationContainer}>
        <Icon
          style={styles.icon}
          name="location"
          size={18}
          color={theme.colors.gray}
        />
        <Text style={styles.subtitle} ellipsizeMode="tail" numberOfLines={1}>
          {location}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  title: {
    color: theme.colors.primary,
    fontSize: 17,
    width: 210,
  },
  icon: {
    marginLeft: -5,
  },
  subtitle: {
    color: theme.colors.gray,
    fontSize: 15,
    marginLeft: 5,
  },
});

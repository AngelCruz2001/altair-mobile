import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {theme} from '../../theme/globalTheme';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  location: string;
  numberOfLines?: number;
};
const TextLocation: FC<Props> = ({location, numberOfLines = 1}) => {
  return (
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
        numberOfLines={numberOfLines}>
        {location}
      </Text>
    </View>
  );
};

export default TextLocation;

const styles = StyleSheet.create({
  locationContainer: {
    flexDirection: 'row',
    marginTop: 5,
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

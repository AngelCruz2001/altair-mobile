import {StyleSheet, StyleSheetProperties, Text, View} from 'react-native';
import React, {FC} from 'react';
import {theme} from '../../theme/globalTheme';

interface TextTitleProps {
  title: string;
  location: string;
  numberOfLines: number;
}

export const TextTitle: FC<TextTitleProps> = ({title, numberOfLines}) => {
  return (
    <Text
      style={styles.title}
      ellipsizeMode="tail"
      numberOfLines={numberOfLines}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    color: theme.colors.primary,
    fontSize: 17,
    width: '80%',
  },
});

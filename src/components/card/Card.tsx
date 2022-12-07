import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {theme} from '../../theme/globalTheme';

interface CardProps {
  children: React.ReactNode;
}

export const Card: FC<CardProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    margin: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginRight: 15,
    padding: 10,
  },
});

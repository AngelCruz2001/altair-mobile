import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import moment from 'moment';
import {theme} from '../../theme/globalTheme';

type TextDateProps = {
  date: string;
};

const TextDate: FC<TextDateProps> = ({date}) => {
  const dateDay = moment(date).format('DD');
  const dateMonth = moment(date).format('MMM');
  return (
    <View style={styles.date}>
      <Text style={styles.day}>{dateDay}</Text>
      <Text style={styles.month}>{dateMonth}</Text>
    </View>
  );
};

export default TextDate;

const styles = StyleSheet.create({
  date: {
    backgroundColor: theme.colors.white,
    opacity: 0.9,
    position: 'absolute',
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    top: 10,
    left: 10,
    zIndex: 1,
    elevation: 1,
  },
  day: {
    fontSize: 20,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  month: {
    fontSize: 20,
    marginTop: -7,
    color: theme.colors.primary,
  },
});

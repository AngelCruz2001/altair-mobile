import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {IPrices} from '../../interfaces/event.interface';
import {theme} from '../../theme/globalTheme';

export interface PriceProps extends IPrices {
  setActivePrice: (price: number) => void;
}

export const Price: FC<PriceProps> = ({type, value, color, setActivePrice}) => {
  return (
    <TouchableOpacity
      style={{backgroundColor: color, ...styles.container}}
      onPress={() => setActivePrice(value)}>
      <Text style={styles.type}>{type}</Text>

      <Text style={styles.value}>${value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    height: 60,
    width: 120,
    shadowColor: theme.colors.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  type: {
    fontSize: 14,
    color: theme.colors.white,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
});

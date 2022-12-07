import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../../theme/globalTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const BuyButton = ({activePrice}: {activePrice: number}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Buy ticket ${activePrice}</Text>
      <View style={styles.icon}>
        <Icon style={styles.text} name="arrow-back" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    elevation: 2,
    margin: 'auto',
    width: 250,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',

    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    color: theme.colors.white,
  },

  icon: {
    position: 'absolute',
    right: 10,

    height: 28,
    width: 28,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.secondary,
    borderRadius: 500,
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import {Picker} from '@react-native-picker/picker';
import {theme} from '../../theme/globalTheme';
export const Location = () => {
  return (
    <View style={styles.container}>
      {/* <Picker
        selectedValue="London"
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => console.log(itemValue)}>
        <Picker.Item label="London" value="London" />
        <Picker.Item label="New York" value="New York" />
        <Picker.Item label="Paris" value="Paris" />
      </Picker> */}
      <Text style={styles.title}>Current Location</Text>
      <Text style={styles.location}>Lekki, Nigeria</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    width: 150,
    color: 'white',
  },
  title: {
    fontSize: 15,
    color: theme.colors.gray,
  },
  location: {
    fontSize: 15,
    color: theme.colors.white,
    marginBottom: 10,
  },
});

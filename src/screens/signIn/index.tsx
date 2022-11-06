import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}

export const SignIn: FC<Props> = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <TouchableOpacity
        onPress={() => {
          console.log('Sign in!');
        }}>
        <Text>Sign in!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <Text>Sign up!</Text>
      </TouchableOpacity>
    </View>
  );
};

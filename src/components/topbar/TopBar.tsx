import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from '../../theme/globalTheme';
import {useNavigation} from '@react-navigation/native';

interface TopBarProps {
  title: string;
  leftIcon: string;
  leftIconAction?: () => void;
}

export const TopBar: FC<TopBarProps> = props => {
  const navigator = useNavigation();

  const handleBack = () => {
    navigator.goBack();
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleBack}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Icon style={styles.leftIcon} name={props.leftIcon} />
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 20,
  },
  leftIcon: {
    fontSize: 30,
    color: theme.colors.white,
    paddingHorizontal: 20,
  },
  title: {
    ...theme.textVariants.body,
    color: theme.colors.white,
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
  },
});

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../theme/globalTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/RootStack.type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const SearchTouchable = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Explore'>>();

  const handleNavigateSearch = () => {
    navigation.navigate('Search');
  };

  return (
    <TouchableOpacity
      style={styles.searchContainer}
      activeOpacity={1}
      onPress={handleNavigateSearch}>
      <Icon name="search" size={25} color={theme.colors.gray} />
      <Text style={styles.search}>Search events</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 50,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    margin: 20,
    paddingRight: 10,
    paddingLeft: 10,
    // Color placeholder
  },
  search: {
    fontSize: 18,
    marginLeft: 12,
    width: '85%',
    color: theme.colors.gray,
  },
});

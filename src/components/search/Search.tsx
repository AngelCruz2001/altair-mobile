import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {FC, useCallback, useEffect, useRef, useState} from 'react';
import {theme} from '../../theme/globalTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useFocusEffect} from '@react-navigation/native';
interface Props {
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
}

export const Search: FC<Props> = ({setSearchWord}) => {
  const [search, setSearch] = useState('');
  const textInput = useRef<TextInput>(null);

  const onChangeSearch = (query: string) => {
    setSearch(query);
    setSearchWord(query);
  };

  useFocusEffect(
    useCallback(() => {
      const focus = () => {
        setTimeout(() => {
          textInput?.current?.focus();
        }, 1);
      };
      focus();
      return focus;
    }, []),
  );

  return (
    <View style={styles.searchContainer}>
      <Icon name="search" size={25} color={theme.colors.gray} />
      <TextInput
        ref={textInput}
        style={styles.search}
        onChangeText={onChangeSearch}
        value={search}
        placeholder="Search events"
        placeholderTextColor={theme.colors.gray}
        autoFocus={true}
        editable={true}
      />
    </View>
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
    alignSelf: 'center',
    paddingHorizontal: 10,
    // Color placeholder
  },
  search: {
    fontSize: 18,
    marginLeft: 10,
    width: '85%',
    color: theme.colors.primary,
  },
});

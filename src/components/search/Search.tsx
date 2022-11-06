import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {theme} from '../../theme/globalTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const Search = () => {
  const [search, setSearch] = React.useState('');

  const onChangeSearch = (query: string) => setSearch(query);

  return (
    <View style={styles.searchContainer}>
      <Icon name="search" size={25} color={theme.colors.gray} />
      <TextInput
        style={styles.search}
        onChangeText={onChangeSearch}
        value={search}
        placeholder="Search events"
        placeholderTextColor={theme.colors.gray}
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
    margin: 20,
    paddingRight: 10,
    paddingLeft: 10,
    // Color placeholder
  },
  search: {
    fontSize: 18,
    marginLeft: 10,
    width: '85%',
    color: theme.colors.primary,
  },
});

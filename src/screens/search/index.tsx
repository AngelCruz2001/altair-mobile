import {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {TopBar} from '../../components/topbar/TopBar';
import {theme} from '../../theme/globalTheme';
import {Search} from '../../components/search';
import {FavoriteEvents} from '../../components/events/FavoriteEvents';
import {useHideTabBar} from '../../hooks/useHideTabBar';

export const SearchScreen = () => {
  const [wordToFilter, setWordToFilter] = useState('');
  useHideTabBar();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
      style={styles.container}
      enabled={Platform.OS === 'ios'}>
      <ScrollView>
        <View style={styles.top}>
          <TopBar title="Search" leftIcon={'arrow-back'} />
          <Search setSearchWord={setWordToFilter} />
        </View>

        <FavoriteEvents shouldFilter={true} filterWord={wordToFilter} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  top: {
    paddingTop: 100,
    marginBottom: 20,
  },
});

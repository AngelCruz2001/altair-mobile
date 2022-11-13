import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {Fragment} from 'react';
import {theme} from '../../theme/globalTheme';
import {
  Search,
  UpcomingEvents,
  Location,
  FavoriteEvents,
} from '../../components';

export const Explore = () => {
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.primary}
        />
        <ScrollView>
          <View style={styles.header}>
            <Location />
            <Search />
          </View>
          <UpcomingEvents />
          <FavoriteEvents />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  header: {
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    height: 180,
    shadowColor: theme.colors.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

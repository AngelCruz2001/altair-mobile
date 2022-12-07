import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {useAppDispatch} from '../../store/hooks';
import {toogleFavoriteEvent} from '../../store/events/eventsSlice';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from '../../theme/globalTheme';
import {startSetAsFavoriteEvent} from '../../store/events/thunks';

type Props = {
  id: number;
  isFavorite: boolean;
};

const Bookmark: FC<Props> = ({id, isFavorite}) => {
  const dispatch = useAppDispatch();

  const toogleFavorite = (id: number) => {
    dispatch(startSetAsFavoriteEvent(id));
  };

  return (
    <TouchableOpacity
      style={styles.pinContainer}
      onPress={() => toogleFavorite(id)}>
      <Icon
        name={isFavorite ? 'ios-bookmark' : 'ios-bookmark-outline'}
        style={styles.pin}
      />
    </TouchableOpacity>
  );
};

export default Bookmark;

const styles = StyleSheet.create({
  pinContainer: {
    position: 'absolute',
    alignItems: 'flex-end',
    zIndex: 1,
    top: 9,
    right: 10,
  },
  pin: {
    color: theme.colors.secondary,
    fontSize: 23,
  },
});

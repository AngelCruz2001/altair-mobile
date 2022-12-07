import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {useAppSelector} from '../../store/hooks';
import EventListItem from './EventListItem';

interface Props {
  shouldFilter?: boolean;
  filterWord?: string;
}

export const FavoriteEvents: FC<Props> = ({shouldFilter, filterWord}) => {
  const {events} = useAppSelector(state => state.events);

  return (
    <View style={styles.container}>
      {shouldFilter ? (
        <>
          {events?.map(
            event =>
              event.title
                .toLowerCase()
                .includes(filterWord?.toLowerCase()!) && (
                <EventListItem key={event.id} {...event} />
              ),
          )}
        </>
      ) : (
        <>
          {events?.map(event => (
            <EventListItem key={event.id} {...event} />
          ))}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});

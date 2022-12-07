import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {FC} from 'react';
import {IEvent, IPrices} from '../../interfaces/event.interface';
import {Price} from './Price';

interface PricesProps {
  prices: IPrices[];
  setActivePrice: (price: number) => void;
}

export const Prices: FC<PricesProps> = ({prices, setActivePrice}) => {
  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}>
      {prices.map(price => (
        <Price
          key={price.type}
          type={price.type}
          setActivePrice={setActivePrice}
          value={price.value}
          color={price.color}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
});

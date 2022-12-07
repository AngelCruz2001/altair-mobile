import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Modal,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppSelector} from '../../store/hooks';
import {Prices, TopBar, BuyButton, Description} from '../../components';
import {Organizer} from '../../components';
import {theme} from '../../theme/globalTheme';
import moment from 'moment';
import {Descriptor} from '../../components/descriptor/Descriptor';
export const Event = () => {
  const {activeEvent} = useAppSelector(state => state.events);
  if (!activeEvent) {
    return null;
  }
  const [activePrice, setActivePrice] = useState(activeEvent.prices[0].value);
  const dateTitle = moment(activeEvent.date).format('DD MMMM, YYYY');
  const dateDescription =
    moment(activeEvent.date).format('dddd, ').toString() +
    `${activeEvent.startTime} - ${activeEvent.endTime}`;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: activeEvent.coverPicture}}
            style={styles.image}
          />
        </View>
        <TopBar title={'Event Details'} leftIcon={'arrow-back'} />
        <View style={styles.information}>
          <Text style={styles.title}>{activeEvent.title}</Text>
          <Organizer {...activeEvent.organizer} />
          <Prices prices={activeEvent.prices} setActivePrice={setActivePrice} />
          <Descriptor
            title={dateTitle}
            description={dateDescription}
            image={require('../../assets/img/calendar.png')}
          />
          <Descriptor
            title={activeEvent.title}
            description={activeEvent.place}
            image={require('../../assets/img/location.png')}
          />
          <Description description={activeEvent.description} />
        </View>
      </ScrollView>
      <BuyButton activePrice={activePrice} />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    //backgroundColor: 'red',
  },
  container: {flex: 1},
  imageContainer: {width: '100%', height: 230},
  image: {width: '100%', height: '100%', resizeMode: 'cover'},
  information: {padding: 20, position: 'relative'},
  title: {...theme.textVariants.header, color: theme.colors.primary},
});

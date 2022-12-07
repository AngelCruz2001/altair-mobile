import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../theme/globalTheme';

export const Description = ({description}: {description: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Description</Text>
      <Text style={styles.content}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.foreground,
    marginBottom: 10,
  },
  content: {
    color: theme.colors.primary,
    ...theme.textVariants.body,
    textAlign: 'justify',
    lineHeight: 30,
    marginBottom: 50,
  },
});

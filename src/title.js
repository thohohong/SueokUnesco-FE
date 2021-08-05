import React from 'react';
import { StatusBar, StyleSheet, Dimensions, View, Text, Image } from 'react-native';
import {theme} from './theme';

export const MainTitle = () => {
  return (
    <View
      style={{flexDirection: 'row'}}
    >
      <Image
        style={styles.logo}
        source={require('../assets/icon/unesco.png')}
        resizeMode='stretch'
      />
      <View
        style={{flexDirection: 'column'}}
      >
        <Text style={styles.subText}>문산수억고등학교</Text>
        <Text style={styles.mainText}>유네스코</Text>
      </View>
  </View>
  );
};

export const styles = StyleSheet.create({
  logo : {
    width: 60,
    height: 60,
    // color: theme.primary,
  },

  mainText : {
    fontSize: 24,
    color: theme.text,
  },

  subText : {
    fontSize: 16,
    color: theme.text,
  },
});
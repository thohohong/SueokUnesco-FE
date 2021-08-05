import React from 'react';
import { StatusBar, StyleSheet, Dimensions, View, Text, Image } from 'react-native';
import { MainTitle } from './title';


export default function App () {
  return (
    <View style={{width: width, alignSelf: 'center'}}>
      <MainTitle/>
    </View>
    
  );
}

const width = Dimensions.get('window').width - 32;


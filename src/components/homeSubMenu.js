import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {theme} from '../theme';

export const SubMenu = props => {
  return (
    <View style={{marginVertical:8}}>
      <Text style={subMenuStyles.title}>{props.title}</Text>
      <View style={subMenuStyles.box}>
        {props.contents()}
      </View>
    </View>
  );
};

export const subMenuStyles = StyleSheet.create({
  title : {
    fontSize: 16,
    marginBottom: 8,
  }, 
  box: {
    borderColor: theme.stroke,
    borderWidth: 1,
    overflow: 'hidden',
    borderRadius: 10,
  },
})
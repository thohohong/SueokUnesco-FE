import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {theme} from '../theme';

export const Project = props => {
  return (
    <View>
      <Text>Project!</Text>
      <Button
        title="hello"
        onPress={console.log("hello?")}  
      />
      <Button
        title="hello"
        onPress={console.log("hello2?")}  
      />
      <Button
        title="hello"
        onPress={console.log("hello3?")}  
      />
    </View>
  );
};

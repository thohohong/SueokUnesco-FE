import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {theme} from '../theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Category from './Category';
import ArticleList from './ArticleList';

const Stack = createNativeStackNavigator();

export const CategoryNavigator = props => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Category" component={Category}/>
        <Stack.Screen name="ArticleList" component={ArticleList}/>
      </Stack.Navigator>
  );
};
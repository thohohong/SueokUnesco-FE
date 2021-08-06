import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Home} from './home';
import {Category} from './Category';
import {Roadmap} from './Roadmap';
import {Project} from './Project';

const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="홈" component={Home} options={{headerShown: false}}/>
      <Tab.Screen name="게시판" component={Category} options={{headerShown: false}}/>
      <Tab.Screen name="로드맵" component={Roadmap} options={{headerShown: false}}/>
      <Tab.Screen name="프로젝트" component={Project} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
}

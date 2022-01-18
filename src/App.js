import React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Home} from './home';
import {CategoryNavigator} from './CategoryNavigator';
import {Roadmap} from './Roadmap';
import {ProjectNavigator} from './Project';
import CheckBox from '../assets/icon/checkbox.png';

const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="홈" component={Home}
        options={{headerShown: false, tabBarIcon:({focused, color, size})=>{
          return(<Image source={CheckBox} tintColor={color} style={{width: size, resizeMode: 'contain'}}/>)
        }}}
      />
      <Tab.Screen name="게시판" component={CategoryNavigator} options={{headerShown: false}}/>
      <Tab.Screen name="로드맵" component={Roadmap} options={{headerShown: false}}/>
      <Tab.Screen name="프로젝트" component={ProjectNavigator} options={{headerShown: false}}/>
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

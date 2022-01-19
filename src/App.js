import React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Home} from './Home';
import CategoryNavigator from './Category';
import RoadmapNavigator from './Roadmap';
import {ProjectNavigator} from './Project';
import {images} from './images';

const Tab = createBottomTabNavigator();

function TabBar() {
  const TabBarIcon = ({source, color, size}) => {
    return(
      <Image source={source} tintColor={color} style={{width: size, resizeMode: 'contain'}}/>
    )
  }
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="홈" component={Home}
        options={{headerShown: false, tabBarIcon:({focused, color, size})=>{
          return(<TabBarIcon source={images.home} color={color} size={size}/>)
        }}}
      />
      <Tab.Screen
        name="게시판" component={CategoryNavigator}
        options={{headerShown: false, tabBarIcon:({focused, color, size})=>{
          return(<TabBarIcon source={images.article} color={color} size={size}/>)
        }}}
      />
      <Tab.Screen
        name="로드맵" component={RoadmapNavigator}
        options={{headerShown: false, tabBarIcon:({focused, color, size})=>{
          return(<TabBarIcon source={images.roadmap} color={color} size={size}/>)
        }}}
      />
      <Tab.Screen
        name="프로젝트" component={ProjectNavigator}        
        options={{headerShown: false, tabBarIcon:({focused, color, size})=>{
          return(<TabBarIcon source={images.map} color={color} size={size}/>)
        }}}
      />
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

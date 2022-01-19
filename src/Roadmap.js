import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { textStyle, componentStyle } from './Style';
import TodoList from './components/TodoList';
import { theme } from './theme';
import { images } from './images';
import { IconButton, TextButton } from './components/Button';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RoadmapNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RoadMap" component={Roadmap} options={{title: "로드맵"}}/>
    </Stack.Navigator>
  )
}

const Roadmap = props => {
  const todoList = [
      {todo_idx: 0, contents: "hello 0", done: true},
      {todo_idx: 1, contents: "hello 1", done: false},
      {todo_idx: 2, contents: "hello 2", done: false}
  ];

  const TodoArea = () => {
    return (
      <View style={{marginVertical: 8}}>
        <View style={styles.title}>
          <Text style={textStyle.title}>To-do</Text>
          <IconButton source={images.edit}/>
        </View>    
        <View style={componentStyle.basicBox}>
          <View style={styles.alert}>
            <Image source={images.campaign} tintColor="#FFFFFF" style={styles.alertIcon}/>
            <Text style={styles.alertText}>공지사항 예시</Text>
          </View>
          <View>
            <TodoList todoList={todoList} />
          </View>
        </View>
      </View>
    );
  }
  
  const ScheduleArea = () => {
    const ScheduleBox = ({name, date, onPressOut}) => {
      
      return(
        <TouchableOpacity style={styles.scheduleBox} onPressOut={onPressOut}>
          <Text style={textStyle.body}>
            · {name}
          </Text>
          <Text style={textStyle.caption}>
            {date}
          </Text>
        </TouchableOpacity>
      )
    }

    return(
      <View style={{marginVertical: 8}}>
        <View style={styles.title}>
          <Text style={textStyle.title}>일정</Text>
          <View style={{flexDirection: 'row'}}>
            <IconButton style={{marginRight: 8}} source={images.calendar}/>
            <IconButton source={images.bulletList}/>
          </View>
          
        </View> 
        <View style={componentStyle.basicBox}>
          <ScheduleBox name="로드맵 UI 완료" date="2022-01-19" onPressOut={()=>console.log("hello")}/>
          <ScheduleBox name="로드맵 UI 완료" date="2022-01-19" onPressOut={()=>console.log("hello")}/>
        </View>
      </View>
    )
  }

  return (
    <View>
      <TodoArea />
      <ScheduleArea />
    </View>
  )
  
};


const styles = StyleSheet.create({
  title: {
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  alert: {
    backgroundColor: theme.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
  },
  alertIcon: {
    width: 36,
    height: 36,
  },
  alertText: {
    ...textStyle.body,
    color: '#FFFFFF',
    paddingLeft: 8,
  },
  scheduleBox: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  }

});

export default RoadmapNavigator;


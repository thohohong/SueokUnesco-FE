import React, {useState} from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import { IconButton } from './Button';
import { textStyle } from '../Style';
import { images } from '../images';

const TodoList = ({todoList}) => {
    const [todos, setTodos] = useState(todoList);
    
    const _todoToggle = (id) => {
      const cur_todo = Object.assign({}, todos);
      cur_todo[id].done ? cur_todo[id].done = false : cur_todo[id].done = true;
  
      setTodos(cur_todo);
    }
  
    return (
      <View>
        {Object.values(todos).map(item => (
          <Pressable key={item.todo_idx} style={styles.contentsBox} onPressOut={() => {}}>
            <IconButton
              id={item.todo_idx}
              size="S"
              source={item.done ? images.done : images.undone}
              onPressOut={_todoToggle}
            />
            <Text style={[textStyle.body, {marginLeft: 4, alignSelf: 'center'}]}>{item.contents}</Text>
          </Pressable>
        ))}
      </View>
    )
};

const styles = StyleSheet.create({
    contentsBox : {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
});

export default TodoList;
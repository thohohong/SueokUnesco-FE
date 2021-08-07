import React, {useState} from 'react';
import { StatusBar, StyleSheet, Dimensions, View, Text, Image, ScrollView, Pressable } from 'react-native';
import { MainTitle } from './components/title';
import { SubMenu } from './components/homeSubMenu';
import { images } from './images';
import { IconButton } from './components/IconButton';
import { Styles } from './Style';

export const Home = () => {
  const CategoryContents = () => {
    const categoryList = [
      {category: "자유게시판", latest_post_title: "2021-01-01"},
      {category: "아티클", latest_post_title: "2021-01-01"},
      {category: "공모전", latest_post_title: "2021-01-01"},
    ];
    
    const [categorys, setCategorys] = useState(categoryList);

    return (
      <View style={HomeStyles.innerContents}>
        { Object.values(categorys).map(item => (
          <Pressable style={HomeStyles.Box}>
            <Text style={Styles.bodyText}>{"· " + item.category}</Text>
          </Pressable>
        ))}
      </View>
    )
  };

  const TodoContents = () => {
    
    const todoList = [
      {todo_idx: 0, contents: "hello 0", done: true},
      {todo_idx: 1, contents: "hello 1", done: false},
      {todo_idx: 2, contents: "hello 2", done: false}
    ];

    const [todos, setTodos] = useState(todoList);

    const _todoToggle = (id) => {
      const cur_todo = Object.assign({}, todos);
      cur_todo[id].done ? cur_todo[id].done = false : cur_todo[id].done = true;
      cur_todo[id].done ? console.log("true") : console.log("false");

      setTodos(cur_todo);
    }

    return (
      <View style={HomeStyles.innerContents}>
        {Object.values(todos).map(item => (
          <Pressable key={item.todo_idx} style={HomeStyles.Box} onPressOut={() => console.log(item.todo_idx)}>
            <IconButton
              id={item.todo_idx}
              size="S"
              name={item.done ? images.done : images.undone}
              onPressOut={_todoToggle}
            />
            <Text style={[Styles.bodyText, HomeStyles.TodoText]}>{item.contents}</Text>
          </Pressable>
        ))}
      </View>
    )
  };

  const ProjectContents = () => {
    const projectList = [];
    return (
      <View>
        <Text>project</Text>
      </View>
    )
  }

  const ContestContents = () => {
    const contestList = [];
    return (
      <View>
        <Text>contest</Text>
      </View>
    )
  }


  return (
    <ScrollView style={HomeStyles.scrollView}>
      <MainTitle />
      <SubMenu title="게시판" contents={CategoryContents}></SubMenu>
      <SubMenu title="To-do" contents={TodoContents}></SubMenu>
      <SubMenu title="프로젝트" contents={ProjectContents}></SubMenu>
      <SubMenu title="공모전" contents={ContestContents}></SubMenu>
    </ScrollView>
  );
}

const width = Dimensions.get('window').width;

const HomeStyles = StyleSheet.create({
  scrollView : {
    paddingHorizontal: 16,
    width: width,
    alignSelf: 'center',
    backgroundColor: '#fff'
  },
  innerContents : {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  Box : {
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TodoText : {
    marginLeft: 8,
  }
})
import React from 'react';
import { StatusBar, StyleSheet, Dimensions, View, Text, Image, ScrollView } from 'react-native';
import { MainTitle } from './components/title';
import { SubMenu } from './components/homeSubMenu';

export const Home = () => {
  const _category = () => {
    const categoryList = [];
    return (
      <View>
        <Text>Category</Text>
      </View>
    )
  };

  const _todo = () => {
    const todoList = [];
    return (
      <View>
        <Text>todo</Text>
      </View>
    )
  };

  const _project = () => {
    const projectList = [];
    return (
      <View>
        <Text>project</Text>
      </View>
    )
  }

  const _contest = () => {
    const contestList = [];
    return (
      <View>
        <Text>contest</Text>
      </View>
    )
  }


  return (
    <ScrollView style={{paddingHorizontal: 16, width: width, alignSelf: 'center', backgroundColor: '#fff'}}>
      <MainTitle />
      <SubMenu title="게시판" contents={_category}></SubMenu>
      <SubMenu title="To-do" contents={_todo}></SubMenu>
      <SubMenu title="프로젝트" contents={_project}></SubMenu>
      <SubMenu title="공모전" contents={_contest}></SubMenu>
    </ScrollView>
  );
}

const width = Dimensions.get('window').width;


import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { theme } from './theme';
import { textStyle, componentStyle } from './Style';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArticleList from './ArticleList';

const Stack = createNativeStackNavigator();

const CategoryNavigator = props => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Category" component={Category} options={{title:"게시판"}}/>
        <Stack.Screen name="ArticleList" component={ArticleList}/>
      </Stack.Navigator>
  );
};

const Category = ({navigation}) => {

  const EachCategory = props => {
    return(
      <TouchableOpacity style={{flexDirection: 'row', paddingVertical: 8, paddingLeft: 12}} onPress={props.onPress}>
        <Text style={textStyle.body}>· {props.title}</Text>
        <Text style={[textStyle.caption, {alignSelf: 'center', marginLeft: 6,}]}>{props.caption}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <View style={styles.box}>
        <Text style={styles.title}>커뮤니티 · 정보 공유</Text>
        <EachCategory
          title="자유게시판" caption="자유롭게 대화를 나누는 게시판"
          onPress={()=>{navigation.navigate("ArticleList", {name: "자유게시판"})}}/>
        <EachCategory title="아티클" caption="전공지식 등 다양한 정보를 작성/공유"/>
        <EachCategory title="공모전 정보" caption="공모전/대외활동 정보를 공유 및 팀원 모집"/>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>프로젝트</Text>
        <EachCategory title="기획안" caption="기획중인 프로젝트를 소개하고 팀원을 모집합니다."/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    ...componentStyle.basicBox,
    marginTop: 8,
  },
  title:{
    ...textStyle.title,
    marginVertical: 8,
    marginLeft: 12,
  }
})

export default CategoryNavigator;
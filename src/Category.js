import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { theme } from './theme';
import { textStyle, componentStyle } from './Style';

const Category = ({navigation}) => {

  const EachCategory = props => {
    return(
      <TouchableOpacity style={{flexDirection: 'row', padding: 8}} onPress={props.onPress}>
        <Text style={textStyle.body}>· {props.title}</Text>
        <Text style={[textStyle.caption, {alignSelf: 'center', marginLeft: 6,}]}>{props.caption}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <Text style={styles.title}>커뮤니티 · 정보 공유</Text>
      <View style={componentStyle.basicBox}>
          <EachCategory
            title="자유게시판" caption="자유롭게 대화를 나누는 게시판"
            onPress={()=>{navigation.navigate("ArticleList", {name: "자유게시판"})}}/>
          <EachCategory title="아티클" caption="전공지식 등 다양한 정보를 작성/공유"/>
          <EachCategory title="공모전 정보" caption="공모전/대외활동 정보를 공유 및 팀원 모집"/>
      </View>
      <Text style={styles.title}>프로젝트</Text>
      <View style={componentStyle.basicBox}>
          <EachCategory title="기획안" caption="기획중인 프로젝트를 소개하고 팀원을 모집합니다."/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    ...textStyle.title,
    marginTop: 16,
    marginBottom: 4,
    marginHorizontal: 16,
  }
})

export default Category;
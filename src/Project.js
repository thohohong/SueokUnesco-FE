import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';
import {theme} from './theme';
import axios from 'axios';
import {textStyle} from './Style';

/* Navigation */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ProjectNavigator = props => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="ProjectList" component={ProjectList}/>
    </Stack.Navigator>
  )
}

const ProjectList = props => {
  const [viewState, setViewState] = useState('whole');

  const ProjectBox = props => {
    const [img, setImg] = useState("");
    
    useEffect(()=>{
      axios.get("https://dog.ceo/api/breeds/image/random")
      .then((response)=>{
        const data_ = response.data.message;
        setImg(data_);
      })
    }, [])

    return(
      <ImageBackground
        source={img != "" ? {uri: img} : null}
        style={styles.projectBox}
        imageStyle={{borderRadius: 10,}}
        blurRadius={5}
      >
        <View style={styles.transparentBG}>
          <Text style={styles.projectTitle}>{props.title}</Text>
          <Text style={styles.projectContents}>{props.contents}</Text>
        </View>
      </ImageBackground>
    )
  }

  const ToggleText = props => {
    return (
      <TouchableOpacity style={{paddingRight: 8,}} onPress={props.onPress}>
        <Text style={[{fontSize: 18}, viewState == props.type ? {color: theme.primary} : {color: theme.unfocused}]}>
          {props.title}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{flex: 1}}>
      <View style={styles.subNavigation}>
        <ToggleText title="전체"   type="whole"     onPress={()=>setViewState("whole")}/>
        <ToggleText title="진행중" type="doing"     onPress={()=>setViewState("doing")}/>
        <ToggleText title="종료"   type="finished"  onPress={()=>setViewState("finished")}/>
      </View>
      <ScrollView style={{margin: 0, flex: 1,}}>
        <ProjectBox title="Project Title" contents="Temp Detail Contents."/>
        <ProjectBox title="Project Title" contents="Temp Detail Contents."/>
        <ProjectBox title="Project Title" contents="Temp Detail Contents."/>
        <ProjectBox title="Project Title" contents="Temp Detail Contents."/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  projectBox: {
    marginHorizontal: 16,
    marginVertical: 8,
    height: 140,
    resizeMode: 'cover',
  },
  transparentBG: {
    width: "100%",
    height: '100%',
    borderRadius: 10,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  projectTitle: {
    ...textStyle.title,
    color: '#ffffff',
    marginVertical: 8,
    fontWeight: 'bold',
  },
  projectContents: {
    ...textStyle.caption,
    color: '#FFFFFF',
  },
  subNavigation: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 8,
    alignItems: 'flex-end'
  }
});

export {ProjectNavigator};
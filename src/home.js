import React, {useState, useEffect} from 'react';
import { StatusBar, StyleSheet, Dimensions, View, Text, Image, ScrollView, Pressable } from 'react-native';
import { MainTitle } from './components/title';
import { images } from './images';
import { IconButton } from './components/IconButton';
import { textStyle, componentStyle } from './Style';
import { theme } from './theme'
import axios from 'axios';

export const Home = () => {
  let memberCache = {}; //cache of im

  const SubMenu = props => {
    return (
      <View style={{marginVertical:8}}>
        <Text style={styles.titleText}>{props.title}</Text>
        <View style={componentStyle.basicBox}>
          {props.contents()}
        </View>
      </View>
    );
  };

  const ProfileImages = (props) => {
    // *Parameters
    // props.members : list of id of members in project
    
    // *What to do?
    // for every members, find there exist current ID's profile image in memberCache.
    // - true : get image from list
    // - false : request image to server
    
    for (id in props.members){
      var baseURL = "2635/api/user/info";
      if (!memberCache.id){ // there is cache
        
      }
      else { // there isn't cache
        axios.get(baseURL + "?id=" + id)
        .then(response=>{

        })
        .catch(error=>{

        })
      }
    }

  }

  const CategoryArea = () => {
    const categoryList = [
      {id: 1, category: "자유게시판", latest_post_title: "2021-01-01"},
      {id: 2, category: "아티클", latest_post_title: "2021-01-01"},
      {id: 3, category: "공모전", latest_post_title: "2021-01-01"},
    ];
    
    const [categorys, setCategorys] = useState(categoryList);

    return (
      <View>
        { Object.values(categorys).map(item => (
          <Pressable style={styles.contentsBox} key={item.id}>
            <Text style={textStyle.body}>{"· " + item.category}</Text>
          </Pressable>
        ))}
      </View>
    )
  };

  const TodoArea = () => {
    
    const todoList = [
      {todo_idx: 0, contents: "hello 0", done: true},
      {todo_idx: 1, contents: "hello 1", done: false},
      {todo_idx: 2, contents: "hello 2", done: false}
    ];

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
              name={item.done ? images.done : images.undone}
              onPressOut={_todoToggle}
            />
            <Text style={[textStyle.body, {marginLeft: 4, alignSelf: 'center'}]}>{item.contents}</Text>
          </Pressable>
        ))}
      </View>
    )
  };

  const ProjectArea = () => {
    const ProjectList = [
      {id: 1, title: "Project1", latest_post_title: "2021-01-01"},
      {id: 2, title: "Project2", latest_post_title: "2021-01-01"},
      {id: 3, title: "Project3", latest_post_title: "2021-01-01"},
    ];
    
    const [projects, setProjects] = useState(ProjectList);

    return (
      <View>
        { Object.values(projects).map(item => (
          <Pressable style={styles.contentsBox} key={item.id}>
            <Text style={textStyle.body}>{"· " + item.title}</Text>
          </Pressable>
        ))}
      </View>
    )
  }

  //Single Information of Contest
  const ContestInfo = (props) => {
    // Get Props
    const contestList = [];
    const [img, setImg] = useState("");

    useEffect(()=>{
      axios.get("https://dog.ceo/api/breeds/image/random")
      .then((response)=>{
        const data_ = response.data.message;
        setImg(data_);
      })
    }, [])
  
    return (
      <View style={{flexDirection: 'row', height: 100, flex: 1, borderWidth: 1, borderColor: theme.stroke}}>
        {img != "" ?
          <Image style={{height: 100, width: 120, resizeMode: 'cover'}}source={{uri: img}} /> 
          : <View style={{height: 100, width: 120, backgroundColor: theme.emptyImage}}></View>
        }
        <View style={{flexDirection: 'column', padding: 12, flex: 1}}>
          <Text style={[textStyle.body, {paddingBottom: 8,}]}>{props.title}</Text>
          <Text style={textStyle.caption}>
            {props.contents.length > 30 ? props.contents.substring(0, 30) + "..." : props.contents}
          </Text>
        </View>
      </View>
    )
  }
  const ContestArea = () => {
    const contestList = [];
    return (
      <View>
        <ContestInfo
          title="전국 고등학생 코딩 대회"
          contents="안녕하세요! 대회 정보를 알려드립니다. 이번 대회는 전국 고등학생을 대상으로 하는 코딩 테스트 대회로, 실전 감각을 키우고"
        />
        <ContestInfo
          title="전국 고등학생 코딩 대회"
          contents="안녕하세요! 대회 정보를 알려드립니다. 이번 대회는 전국 고등학생을 대상으로 하는 코딩 테스트 대회로, 실전 감각을 키우고"
        />
        <ContestInfo
          title="전국 고등학생 코딩 대회"
          contents="안녕하세요! 대회 정보를 알려드립니다. 이번 대회는 전국 고등학생을 대상으로 하는 코딩 테스트 대회로, 실전 감각을 키우고"
        />
      </View>
    )
  }


  return (
    <View>
      <ScrollView style={HomeStyles.scrollView}>
        <MainTitle />
        <SubMenu title="게시판" contents={CategoryArea}></SubMenu>
        <SubMenu title="To-do" contents={TodoArea}></SubMenu>
        <SubMenu title="프로젝트" contents={ProjectArea}></SubMenu>
        <SubMenu title="공모전" contents={ContestArea}></SubMenu>
      </ScrollView>
    </View>
    
  );
}

const width = Dimensions.get('window').width;

const HomeStyles = StyleSheet.create({
  scrollView : {
    //paddingHorizontal: 16,
    width: '100%',
    //marginHorizontal : 16,
    alignSelf: 'center',
    backgroundColor: '#fff'
  },
  innerContents : {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  Box : {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
})

const styles = StyleSheet.create({
  titleText: {
    ...textStyle.title,
    marginHorizontal: 16,
    marginVertical: 4,
  },
  contentsBox : {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
})
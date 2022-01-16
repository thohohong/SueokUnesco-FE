import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { theme } from './theme';
import {textStyle, componentStyle} from './Style';

const ArticleList = ({navigation, route}) => {
    useEffect(() => {
        navigation.setOptions({
            title: route.params.name,
        });
    }, []);
    const SingleArticle = (props) => {
        return(
            <TouchableOpacity style={styles.Box}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.detail}>
                    {props.detail}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                    <Text style={styles.caption}>{props.commentnum}</Text>
                    <Text style={styles.caption}>{props.likenum}</Text>    
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView>
            <SingleArticle title="게시글의 제목입니다" detail="게시글 내용 미리보기 입니다." commentnum="3" likenum="7"/>
            <SingleArticle title="게시글의 제목입니다" detail="게시글 내용 미리보기 입니다." commentnum="3" likenum="7"/>
            <SingleArticle title="게시글의 제목입니다" detail="게시글 내용 미리보기 입니다." commentnum="3" likenum="7"/>
            <SingleArticle title="게시글의 제목입니다" detail="게시글 내용 미리보기 입니다." commentnum="3" likenum="7"/>
            <SingleArticle title="게시글의 제목입니다" detail="게시글 내용 미리보기 입니다." commentnum="3" likenum="7"/>
            <SingleArticle title="게시글의 제목입니다" detail="게시글 내용 미리보기 입니다." commentnum="3" likenum="7"/>

            <SingleArticle title="게시글의 제목입니다" detail="게시글 내용 미리보기 입니다." commentnum="3" likenum="7"/>
            <SingleArticle title="게시글의 제목입니다" detail="게시글 내용 미리보기 입니다." commentnum="3" likenum="7"/>
            <SingleArticle title="게시글의 제목입니다" detail="게시글 내용 미리보기 입니다." commentnum="3" likenum="7"/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Box: {
        backgroundColor: '#ffffff',
        borderColor: theme.stroke,
        borderWidth: 0.7,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    title : {
        ...textStyle.body,
    },
    detail: {
        ...textStyle.caption,
        paddingVertical: 4,
    },
    caption: {
        ...textStyle.caption,
        width: 20,
    }
});

export default ArticleList;
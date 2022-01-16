import React from 'react';
import { Pressable, Text,Image, StyleSheet } from 'react-native';
import {Icon} from 'react-native-elements'
import { images } from '../images';
import { theme } from '../theme';

export const IconButton = ({id, name, completed, onPressOut, size}) => {
    const _onPressOut = () => {
        onPressOut(id);
    }
    return (
        <Pressable onPressOut={_onPressOut} style={IconButtonStyle.IconButton}>
        { size === "M" ? 
            <Image source={name} completed={completed} style={IconButtonStyle.image}/>
          : <Image source={name} completed={completed} style={[IconButtonStyle.image, {width: 24, height: 24}]}/>
        }
        </Pressable>
    )
}

export const IconButtonStyle = StyleSheet.create({
    IconButton : {

    },
    image : {
        tintColor : theme.text,
        resizeMode: 'stretch',
        width: 32,
        height : 32,
    }
}) 

import React from 'react';
import { StyleSheet } from 'react-native';
import { theme } from './theme';

const textStyle = StyleSheet.create({
    title: {
        fontSize: 18,
        color: theme.primary,
    },
    body : {
        fontSize: 16,
        color: theme.text,
    },
    caption: {
        fontSize: 12,
        color: theme.caption,
    },    
})

const componentStyle = StyleSheet.create({
    basicBox: {
        backgroundColor: '#ffffff',
        borderColor: theme.stroke,
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: 16,
    }
})

export {textStyle, componentStyle};
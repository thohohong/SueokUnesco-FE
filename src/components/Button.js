import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { theme } from '../theme';

const TextButton = ({title, onPress, focus}) => {
  return(
    <TouchableOpacity style={{paddingRight: 8,}} onPress={onPress}>
      <Text style={[{fontSize: 18}, focus ? {color: theme.primary} : {color: theme.unfocused}]}>
        {title}
      </Text>
    </TouchableOpacity>   
  )
}

const IconButton = ({id, source, onPressOut, size, style}) => {
  const _onPressOut = () => {
      onPressOut(id);
  }

  return (
      <TouchableOpacity onPressOut={_onPressOut}>
      { size === "M" ? 
          <Image source={source} style={[style, styles.image]}/>
        : <Image source={source} style={[style, styles.image, {width: 24, height: 24}]}/>
      }
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image : {
    tintColor : theme.text,
    resizeMode: 'stretch',
    width: 32,
    height : 32,
  }
});


export {TextButton, IconButton};
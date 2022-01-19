import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { theme } from '../theme';

const TextButton = ({type, title, onPress, focus}) => {
  return(
    <TouchableOpacity style={{paddingRight: 8,}} onPress={onPress}>
      <Text style={[{fontSize: 18}, focus ? {color: theme.primary} : {color: theme.unfocused}]}>
        {title}
      </Text>
    </TouchableOpacity>   
  )
}

export {TextButton};
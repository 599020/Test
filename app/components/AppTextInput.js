import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import Icon from './Icon'
import { MaterialCommunityIcons} from "@expo/vector-icons"
import { useState } from 'react'
import { Platform } from 'react-native'
import defaultStyles from '../config/styles'

export default function AppTextInput({icon, width="100%", ...otherProps}) {
 
const [firstName, setFirstName] = useState("");  
  return (
    <View style ={[styles.container, {width}]}> 
      {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
      <TextInput
        style={defaultStyles.text}
        {...otherProps}
        />
    </View>
  )
}

const styles = StyleSheet.create({

    container: { 
    flexDirection: "row", 
    backgroundColor: defaultStyles.colors.light, 
    padding:15,
    borderRadius: 25,
    marginVertical: 10},

    
    icon:{
        marginRight: 10

    },
    
})
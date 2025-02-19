import {Text, View,} from 'react-native'
import React from 'react'
import defaultStyles from "../config/styles.js"

export default function AppText({ children, style, ...otherProps }) {
  return (
    
      <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>
    
  )
}


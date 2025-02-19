import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons} from "@expo/vector-icons";
import colors from '../config/colors';

export default function Icon({
    name,
    size = 40,
    backgroundColor = "#000",
    iconColor = "#fff",
}
 ) {
  return (
    <View style={{
        width: size,
        height : size,
        borderRadius: 20,
        backgroundColor,
        alignItems: "center",
        justifyContent: "center",
    }} >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5}/>
    </View>
  )
}

const styles = StyleSheet.create({})
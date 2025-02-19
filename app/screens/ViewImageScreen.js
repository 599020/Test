
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from "../config/colors.js"
import { MaterialCommunityIcons} from "@expo/vector-icons";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}> 
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color ="white" size={35}/>
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color ="white" size={35}/>
      </View>

      <Image resizeMode="contain" style={styles.image} source={require("../assets/chair.jpg")}/>
    </View>
  )
}


const styles = StyleSheet.create({
    
    closeIcon:{
        
        position: "absolute",
        top: 40,
        left: 30,

    },
    container:{
        backgroundColor: colors.black,
        flex: 1,

    },
    deleteIcon:{
        position: "absolute",
        top: 40,
        right: 30,
    },

    image:{
        width: "100%",
        height: "100%", 
    },


    
})
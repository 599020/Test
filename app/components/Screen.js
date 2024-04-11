import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from "expo-constants";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Screen( {children, style} ) {
  return (
    
      <SafeAreaView style={[styles.safeAreaView, style]}>
        <View style={[styles.view, style]} >
        {children}
        </View>
      </SafeAreaView>
    
  )
}


const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        
    },
    safeAreaView: {
      paddingTop: Constants.statusBarHeight,
      flex: 1,
     
    },
    view:{
      flex: 1,
    }
    
})
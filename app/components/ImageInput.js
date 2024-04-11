import { StyleSheet, Text, View, Image, TouchableNativeFeedback, Alert } from 'react-native'
import React, { useEffect } from 'react'
import colors from "../config/colors"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { GestureHandlerRootView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import * as ImagePicker from "expo-image-picker"

export default function ImageInput( {imageUri, onChangeImage} ) {
    useEffect(() => {
        requestPermission()
    }, [])

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!granted)
          alert("Du må gi tilgang til biblioteket ditt!");
      };
    

    const handlePress = () =>{
        if(!imageUri) selectImage()
        else Alert.alert("Slett", "Er du sikker på at du vil slette dette bildet?",[
         { text: "Yes", onPress:() => onChangeImage(null) },
         { text: "no"}
           ])
    }

    const selectImage = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
           
          });
          if(!result.canceled) 
            onChangeImage(result.assets[0].uri);
        } catch (error) {
          console.log("Klarer ikke å lese bilde");
        }
    }

  return (
    <GestureHandlerRootView>
        
    <TouchableWithoutFeedback onPress={handlePress}>

    <View style={styles.container}>
        { !imageUri && <MaterialCommunityIcons name="camera" size={40} color={colors.medium}/>}
        {imageUri && <Image source={{ uri: imageUri}} style={styles.image}/>}
    </View>
    </TouchableWithoutFeedback>
    </GestureHandlerRootView>

  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: "center",
        height: 100,
        alignItems: "center",
        overflow: "hidden",
        width: 100,
    },
    
    image:{
        height: "100%",
        width: "100%",
        

    }
})
import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import ImageInput from './ImageInput'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'

export default function ImageInputList( {imageUris = [], onRemoveImage, onAddImage}) {
  const scrollView = useRef()
  
  
    return (
    <View>
    <GestureHandlerRootView>

        <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>

            <View style={styles.container}>
                {imageUris.map(uri => (
                    <ImageInput 
                    imageUri={uri} 
                    onChangeImage={() => onRemoveImage(uri)}
                    />
                    ))}
                <ImageInput onChangeImage={uri => onAddImage(uri)}/>
            </View>
        </ScrollView>
    </GestureHandlerRootView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row"
    }
})
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import Icon from './Icon'
import { MaterialCommunityIcons} from "@expo/vector-icons"
import { useState } from 'react'
import { Platform } from 'react-native'
import defaultStyles from '../config/styles'
import AppText from "./AppText"
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Screen from './Screen'
import PickerItem from './PickerItem'

export default function AppPicker({ icon, items, placeholder, onSelectItem, PickerItemComponent = PickerItem, selectedItem, width}) {
 
const [firstName, setFirstName] = useState("");  

 const [modalVisible, setModalVisible] = useState(false)
  return (

    <>

       <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style = {[styles.container, {width} ]}> 
        {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
        {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText>: <AppText style={placeholder}>{placeholder}</AppText>}
        <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium}  />
        </View>
       </TouchableWithoutFeedback>
       <Modal visible={modalVisible} animationType='slide' >
        <Screen>
        <Button title="close" onPress={() => setModalVisible(false)}/>
        <FlatList
        data={items}
        keyExtractor={item => item.value.toString()}
        renderItem={({item}) => 
          <PickerItemComponent
            item={item}
            label={item.label}
            onPress={() => {
                setModalVisible(false)
                onSelectItem(item)
            }} 
        />}
        />
        </Screen>
       </Modal>
    </>
  )
}

const styles = StyleSheet.create({

    container: { 
    flexDirection: "row", 
    backgroundColor: defaultStyles.colors.light, 
    width: "100%", 
    padding:15,
    borderRadius: 25,
    marginVertical: 10},

    
    icon:{
        marginRight: 10,
        

    },
    text:{
        flex: 1,
    },
    placeholder: {
      color: defaultStyles.colors.medium,
      flex: 1,

    }


    
})
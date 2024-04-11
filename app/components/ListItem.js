import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons} from "@expo/vector-icons";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function ListItem({ title, subTitle, image, ImageComponent, onPress, renderRightActions}) {
  return (
<GestureHandlerRootView>

<Swipeable renderRightActions={renderRightActions}>
 <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
  <View style={styles.container}>
    {ImageComponent}
    {image && <Image style={styles.image} source={image}/>}
     <View style={styles.space}>
      <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
      { subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
     </View>
     <MaterialCommunityIcons color = {colors.medium} name ="chevron-right" size={25}/>
   </View>
 </TouchableHighlight>  
 </Swipeable>
</GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
        alignItems: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    title: {
        fontWeight: "500",

    },
    subTitle: {
        color: colors.medium,

    },
    space:{
      flex: 1,
      marginLeft: 10,
      justifyContent: "center",

    }
})
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import ListItemSeperatorComponent from '../components/ListItemSeperator'
import colors from '../config/colors'
import Icon from '../components/Icon'


const menuItems = [
    {title: "My Listings",
    icon:{
        name: "format-list-bulleted",
        backgroundColor: colors.primary
    }
},

{title: "My Messages",
    icon:{
        name: "email",
        backgroundColor: colors.secondary
    }
}
]

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
        <View style={styles.container}>

        <ListItem
        title="Simon Knutsson"
        subTitle="Legende@gmail.com"
        image={require("../assets/legende.jpeg")}
        />
        </View>
        <View>
            <FlatList
            data={menuItems}
            keyExtractor={(menuItems) => menuItems.title}
            ItemSeparatorComponent={ListItemSeperatorComponent}
            renderItem={( {item} ) => 
              <ListItem
                title={item.title}
                ImageComponent={
                    <Icon
                       name={item.icon.name}
                       backgroundColor={item.icon.backgroundColor}/>
                }
              /> }
               />
        </View>
        <View style={styles.space}>

        <ListItem
        title="Log out"
        ImageComponent={
            <Icon name="logout" backgroundColor="#ffe66d"/>
        }
        />
        </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 20

    },
    screen:{
        backgroundColor: colors.light

    },
    space:{
        marginVertical: 20,
    }
})
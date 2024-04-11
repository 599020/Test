import { FlatList, FlatListComponent, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import Card from "../components/Card"
import colors from '../config/colors';

const listings =[

    {
        id:1,
        title:"red jacket for sale",
        price: 100,
        bilde: require("../assets/MonaLisa.jpg"),
    },
    {
        id:2,
        title:"Legende fyr",
        price: 1000,
        bilde: require("../assets/legende.jpeg"),
    },
  


];

export default function ListingsScreen() {
  return (
    <Screen style={styles.space}>
        <FlatList 
           data={listings}
           keyExtractor={listing => listing.id.toString}
           renderItem={({item}) =>
            <Card 
              title={item.title}
              subTitle={"$" +item.price}
              image={ item.bilde}/>

        }
           ></FlatList>
    </Screen>
  )
}

const styles = StyleSheet.create({
    space:{
        padding: 20,
        backgroundColor: colors.light
    }
})
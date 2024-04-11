import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'

export default function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/BildeDress.avif")}/>
      <View style={styles.detailsContainer}>

      <AppText style={styles.title}>Kul dress for salg</AppText>
      <AppText style={styles.price}>$100</AppText>
      <View style={styles.userContainer}>
       <ListItem
       image={require("../assets/MonaLisa.jpg")}
       title="Simon Knutsson"
       subTitle="5 Listings"
       
       /> 

      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height: 300,

    },
    detailsContainer:{
        padding: 20,

    },
    title:{
        fontSize: 24,
        fontWeight: "500",

    },
    price:{
        color: colors.secondary,
        fontWeigth: "bold",
        fontSize: 20,
        marginVertical: 10,

    },
    userContainer: {
        marginVertical: 40,

    }


})
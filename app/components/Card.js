import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from './AppText'

export default function Card({ title, subTitle, image}) {
  return (
    <View style={styles.card}>
        <Image style={styles.image} source={image}/>
        <View style={styles.detailsContainer}>

        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subTitle}</AppText> 

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",

    },
    detailsContainer:{
        padding: 20,
    },
    image:{
        width: "100%",
        height: 200,

    },
    title:{
        marginBottom: 7,

    },
    subtitle:{
        color: colors.secondary,
        fontWeight: "bold",
    }

})
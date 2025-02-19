import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import { AppForm, AppFormField, ErrorMessage, SubmitButton, AppFormPicker } from '../components/forms';
import * as Location from "expo-location"
import { useState, useEffect } from 'react';

import * as Yup from "yup"
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';


const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Vær så snill å velg et bilde").label("Images")

})

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];



export default function ListingEditScreen() {
const [location, setLocation] = useState()

const getLocation = async () => {

  const {granted} = await Location.requestBackgroundPermissionsAsync()
  if(!granted) return
  const { coords: { latitude, longitude}} = await Location.getLastKnownPositionAsync()
  setLocation({latitude, longitude})
}

  useEffect(() => {
    getLocation()
  },[])

  return (
    <Screen style={styles.container}>
        <AppForm
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
            images: []
          }}
          onSubmit={(values) => console.log(location)}
          validationSchema={validationSchema}
          >
            <FormImagePicker name="images"/>
            <AppFormField 
              maxLength={255} 
              name="title" 
              placeholder="Title"/>
            <AppFormField 
              keyboardType="numeric"
              maxLength={8} 
              name="price" 
              placeholder="Price"
              width="40%"
              />
              <AppFormPicker
                 items={categories}
                 name="category"
                 PickerItemComponent={CategoryPickerItem}
                 placeholder="Category"
                 width = "50%"
              />
            <AppFormField 
              multiline
              numberOfLines={3}
              maxLength={255} 
              name="description" 
              placeholder="Description"/>
            <SubmitButton title="Post"/>


          </AppForm>
        
        
    
    </Screen>
  )
}

const styles = StyleSheet.create({})
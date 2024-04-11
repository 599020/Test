import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import {AppForm, AppFormField, SubmitButton} from "../components/forms"
import * as Yup from "yup"
import { AntDesign } from '@expo/vector-icons';


const validationSchema = Yup.object().shape({
    name: Yup.string().max(35).label("Namn"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")

})

export default function RegisterScreen() {
  return (
    <Screen style={styles.container}>
    
        
        <AppForm
            initialValues={{name:"", email: "", password: ""}}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
        >
            
                
            <AppFormField 
             name="name" 
             autoCapitalize="none"
             autoCorrect={false}
             icon="user"
             keyboardType="name"
             placeholder="name"
             textContentType="name"
             />
            <AppFormField 
             name="email" 
             autoCapitalize="none"
             autoCorrect={false}
             icon="email"
             keyboardType="email-address"
             placeholder="Email"
             textContentType="emailAddress"
            />
             <AppFormField 
              name="password" 
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
            />
                 
             <SubmitButton title="Register"/>
                
        </AppForm>
        
    </Screen>


    
  )
}

const styles = StyleSheet.create({})
import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import {AppForm, AppFormField, SubmitButton} from "../components/forms"
import * as Yup from "yup"


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")

})

export default function LoginScreen() {
    return (
    <Screen style={styles.container}>
        <Image 
         style={styles.logo}
         source={require("../assets/logo-red.png")}/>
        
        <AppForm
            initialValues={{email: "", password: ""}}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
        >
            
                
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
                 
                 <SubmitButton title="Login"/>
                
        </AppForm>
        
    </Screen>
  )
}

const styles = StyleSheet.create({
    
    container:{
        padding: 10,

    },
    
    logo:{
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,



    }
})
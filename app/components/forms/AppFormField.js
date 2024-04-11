import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'

export default function AppFormField({ name, width, ...otherProps }) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext()
  return (

    <>
       <AppTextInput
        width={width}
         onBlur={() => setFieldTouched(name)}
         onChangeText = {handleChange(name)}
         {...otherProps}
        
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  
               )
}

const styles = StyleSheet.create({})
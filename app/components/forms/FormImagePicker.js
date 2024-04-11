
import React from 'react'
import ImageInputList from '../ImageInputList'
import ErrorMessage from "./ErrorMessage"
import { useFormikContext } from 'formik'
import { StyleSheet } from 'react-native'


export default function FormImagePicker({ name }) {
    const {errors, setFieldValue, touched, values} = useFormikContext()
    const imageUris = values[name]


    const handleAdd = uri =>{
        setFieldValue(name, [...imageUris, uri])
      }
    
      const handleRemove = uri => {
        setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri))
      }

  return (
    <>
      <ImageInputList 
      onAddImage={handleAdd}
      onRemoveImage={handleRemove}
      imageUris={imageUris}/>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

const styles = StyleSheet.create({})
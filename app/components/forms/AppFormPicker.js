import React from "react";
import { useFormikContext}from "formik"
import AppPicker from "../AppPicker"
import ErrorMessage from "./ErrorMessage";
import { StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function AppFormPicker({items, name, placeholder, PickerItemComponent, width}) {
    const {errors, setFieldValue, touched, values} = useFormikContext()

  return (
    <>
     <GestureHandlerRootView>

        <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
    </GestureHandlerRootView>
    </>
  )
}

const styles = StyleSheet.create({})
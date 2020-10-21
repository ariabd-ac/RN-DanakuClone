import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {  } from 'react-native-gesture-handler'
import { Colors } from '../../../utils'

const Button = ({text,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.button_text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button:{
        backgroundColor:Colors.background,
        padding:15,
        borderRadius:10
    },
    button_text:{
        textAlign:"center",
        color:Colors.header
    }
})

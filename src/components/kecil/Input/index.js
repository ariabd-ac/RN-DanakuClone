import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import { Colors } from '../../../utils'
import EnterNumber from './EnterNumber'

const Input = ({placeholder,type,onChangeText,value}) => {

    if(type=='enterNumber'){
        return(
            <EnterNumber onChangeText={onChangeText} value={value}/>
        )
    }
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} style={styles.textinput}/>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container:{
        
    },
    textinput:{
        fontSize:20,
        color:Colors.background
    }
})

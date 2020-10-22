import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import { Colors } from '../../../utils'
import EnterNumber from './EnterNumber'

const Input = ({placeholder,type,onChangeText,value,forwardedRef}) => {

    if(type=='enterNumber'){
        return(
            <EnterNumber onChangeText={onChangeText} value={value} forwardedRef={forwardedRef}/>
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
        fontSize:12,
        borderWidth:1,
        borderColor:Colors.borderColor,
        color:Colors.borderColor,
        borderRadius:5,
        paddingHorizontal:10
    }
})

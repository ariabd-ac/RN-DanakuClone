import React from 'react'
import { StyleSheet, View,TextInput } from 'react-native'
import { Colors } from '../../../utils'


const EnterNumber = ({placeholder,onChangeText,value}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder={placeholder} 
                style={styles.textinput} 
                value={value} 
                onChangeText={onChangeText}
                maxLength={13}
                />
        </View>
    )
}

export default EnterNumber

const styles = StyleSheet.create({
    container:{
        
    },
    textinput:{
        fontSize:20,
        color:Colors.background
    }
})

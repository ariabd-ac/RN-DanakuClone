import React,{useEffect, useImperativeHandle,useRef} from 'react'
import { StyleSheet, View,TextInput } from 'react-native'
import { Colors } from '../../../utils'


const EnterNumber = ({placeholder,onChangeText,value,forwardedRef}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                ref={forwardedRef}
                placeholder={placeholder} 
                style={styles.textinput} 
                value={value} 
                onChangeText={onChangeText}
                maxLength={13}
                keyboardType='numeric'
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
        color:Colors.background,
        minWidth:80,
    }
})

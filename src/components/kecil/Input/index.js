<<<<<<< HEAD
import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Colors} from '../../../utils';
import EnterNumber from './EnterNumber';

const Input = ({placeholder, type, onChangeText, value, forwardedRef}) => {
  if (type == 'enterNumber') {
    return (
      <EnterNumber
        onChangeText={onChangeText}
        value={value}
        forwardedRef={forwardedRef}
      />
    );
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} style={styles.textinput} />
    </View>
  );
};
=======
import React from 'react'
import { StyleSheet, Text, View,TextInput, Picker } from 'react-native'
import { Colors } from '../../../utils'
import EnterNumber from './EnterNumber'

const Input = ({placeholder,label,type,onChangeText,value,forwardedRef}) => {

    

    const InputType=()=>{
        if(type=='enterNumber'){
            return(
                <EnterNumber onChangeText={onChangeText} value={value} forwardedRef={forwardedRef}/>
            )
        }
    
        if(type=='picker'){
            return(
                <View style={styles.textinput}>
                    <Picker onValueChange={onChangeText} selectedValue={value}>
                        <Picker.Item label='Laki-laki' value={1}/>
                        <Picker.Item label='Perempuan' value={2}/>
                    </Picker>
                </View>
            )
        }

        return <TextInput placeholder={placeholder} style={styles.textinput} value={value} onChangeText={onChangeText}/>
    }


    return (
        <View style={styles.container}>
            <Text>{label}</Text>
            <InputType/>
        </View>
    )
}
>>>>>>> 3fdc8a1915ddcd629bb0641115ac268d4b0df435

export default Input;

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {},
  textinput: {
    fontSize: 12,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    color: Colors.borderColor,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
=======
    container:{
        
    },
    textinput:{
        fontSize:12,
        borderWidth:1,
        borderColor:Colors.borderColor,
        color:Colors.borderColor,
        borderRadius:5,
        paddingHorizontal:10,
    }
})
>>>>>>> 3fdc8a1915ddcd629bb0641115ac268d4b0df435

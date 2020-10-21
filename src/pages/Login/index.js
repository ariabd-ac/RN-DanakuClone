import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Gap, Header, Input } from '../../components'
import { Colors } from '../../utils'

const Login = () => {
    const [phoneNumber,setPhoneNumber]=useState()
    const handlePhoneNumber=(e)=>{
        if(!Number(e)){
            return ;
        }else{
            setPhoneNumber(e)
        }
        console.log(phoneNumber)
    }
    return (
        <View style={styles.page}>
            <Header isNext/>
            <View style={styles.container}>
                <Text style={styles.text}>Enter your phone number to sign in or create a new account</Text>
                <Gap height={20}/>
                <View style={styles.container_enter_number}>
                    <Text style={styles.text_enter_number}>+62</Text>
                    <Input placeholder='text' type='enterNumber' onChangeText={handlePhoneNumber} value={phoneNumber}/>
                </View>
                <View style={{backgroundColor:Colors.blue2,height:4,width:40}}></View>
                <Gap height={40}/>
                <Text style={styles.text}>DANAIN also connected with</Text>
                <Gap height={40}/>
                <Text>Logo</Text>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:Colors.header
    },
    container:{
        backgroundColor:Colors.header,
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },text:{
        color:Colors.background
    },
    container_enter_number:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
        
    },
    text_enter_number:{
        color:Colors.blue2,
        fontSize:20
    }
})

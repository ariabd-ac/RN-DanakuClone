import React, { useState,useRef, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Gap, Header, Input, MidMenuItem } from '../../components'
import { Colors, __getData, __storeData } from '../../utils'
import {BukaLapakIcon,LazadaIcon,TixIcon,ManyIcon} from '../../assets/assets'

const Login = ({navigation}) => {
    const [phoneNumber,setPhoneNumber]=useState('')
    const [btnNextDisable,setBtnNextDisable]=useState(true)
    const inputRef=useRef(null)

    const handlePhoneNumber=(e)=>{
        // let regex=/^[0-9\b]+$/
        // if(e!='' && regex.test(e)){
        //     setPhoneNumber(e)
        // }
        setPhoneNumber(e.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ''))
    }

    useEffect(()=>{
        // console.log(inputRef.current)
        setTimeout(()=>{
            inputRef.current.focus()
        },1000)
    },[])

    useEffect(()=>{
        console.log(phoneNumber.length)
        if(phoneNumber.length > 9){
            setBtnNextDisable(false)
        }else{
            setBtnNextDisable(true)
        }
    },[phoneNumber])

    const login=()=>{

        // action login here...
        console.log('login')
          
    }


   

    return (
        <View style={styles.page}>
            <Header isNext isDisable={btnNextDisable} onPress={login}/>
            <View style={styles.container}>
                <Text style={styles.text}>Enter your phone number to sign in or create a new account</Text>
                <Gap height={20}/>
                <View style={styles.container_enter_number}>
                    <Text style={styles.text_enter_number}>+62</Text>
                    <Gap width={10}/>
                    <Input forwardedRef={inputRef} placeholder='text' type='enterNumber' onChangeText={handlePhoneNumber} value={phoneNumber}/>
                </View>
                
                <View style={{backgroundColor:Colors.blue2,height:4,width:40}}></View>
                <Gap height={40}/>
                <Text style={styles.text}>DANAIN also connected with</Text>
                <Gap height={5}/>
                <View style={{flexDirection:'row',width:'50%'}}>
                    <MidMenuItem img={BukaLapakIcon} />
                    <MidMenuItem img={LazadaIcon} />
                    <MidMenuItem img={TixIcon} />
                    <MidMenuItem img={ManyIcon}/>
                </View>
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

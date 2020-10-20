import React,{useEffect} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { DanainText } from '../../assets/assets/SPLASH'
import { Colors } from '../../utils'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('OnBoarding')
        }, 3000);
    })

    return (
        <View style={styles.container}>
            <Image source={DanainText} style={styles.image}/>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors.header
    },
    image:{
        height:40,
        width:250
    }
})

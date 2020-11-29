import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DanakuLogo } from '../../assets/assets'
// import { DanainText } from '../../assets/assets/SPLASH'

import { Colors, __getData } from '../../utils'

const Splash = ({ navigation }) => {
    useEffect(() => {
        __getData('user')
        .then(res=>{
            if(res != null){
                navigation.push('MainApp')
            }else{
                navigation.navigate('OnBoarding')
            }
        })
        
    },[])

    return (
        <View style={styles.container}>
            <Image source={DanakuLogo} style={styles.image} />
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
    image: {
        height: 40,
        // backgroundColor: 'red',
        width: 250
    }
})

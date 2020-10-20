import React from 'react'
import { Dimensions, StyleSheet, Text, View,Image } from 'react-native'
import { SplashIcon1 } from '../../../assets/assets/SPLASH'
import { Colors } from '../../../utils'

const SplashItemWidth=Dimensions.get('window').width

const SplashItem = ({title,desc,imageSource}) => {

    return (
        <View style={styles.container}>
            <View style={styles.image_container}>
                <Image source={imageSource} style={styles.image} resizeMode='contain'/>
            </View>
            <View style={styles.text_container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
        </View>
    )
}

export default SplashItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background,
        width:SplashItemWidth,
        justifyContent:"center",
        alignItems:"center",
    },
    image_container:{
        flex:1,
        overflow:'hidden',
    },
    image:{
        width:410,
        height:600
    },
    text_container:{
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        color:Colors.text,
        fontSize:30,
        textAlign:"center"
    },
    desc:{
        color:Colors.text,
        fontSize:20,
        textAlign:"center"
    }
})

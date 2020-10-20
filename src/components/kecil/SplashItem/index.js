import React from 'react'
import { Dimensions, StyleSheet, Text, View,Image } from 'react-native'
import { Colors } from '../../../utils'

const SplashItemWidth=Dimensions.get('window').width

const SplashItem = ({titleText,imageSource,desc}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{titleText}</Text>
            <View style={styles.image_container}>
                <Image source={imageSource} style={styles.image} resizeMode='contain'/>
                <Text style={styles.desc}>{desc}</Text>
            </View>
        </View>
    )
}

export default SplashItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.header,
        width:SplashItemWidth,
        justifyContent:"center",
        alignItems:"center",
        padding:20,
    },
    image_container:{
        // backgroundColor:'red',
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors.header,
    },
    image:{
        width:300,
        height:300
    },
    title:{
        color:Colors.background,
        fontSize:20,
        textAlign:"center",
        textTransform:"uppercase",
        margin:20
    },
    desc:{
        marginVertical:20,
        color:Colors.background,
        fontSize:14,
        textAlign:"center"
    }
})

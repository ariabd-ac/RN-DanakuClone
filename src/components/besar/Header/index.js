import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { DanainText } from '../../../assets/assets/SPLASH'
import { Colors } from '../../../utils'

const Header = ({isNext,onPress}) => {
    return (
        <View style={styles.container}>
            <View></View>
            <Image source={DanainText} style={styles.image} resizeMode='contain'/>
            {
                isNext &&
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.text_button}>Next</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        paddingVertical:15,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:Colors.header
    },
    image:{
        height:60,
        width:100
    },
    text_button:{
        color:Colors.background,
        fontSize:14
    }
})

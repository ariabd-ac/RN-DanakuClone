import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const SplashItemWidth=Dimensions.get('window').width

const SplashItem = ({i}) => {

    return (
        <View style={styles.container}>
            <Text>Splash {i}</Text>
        </View>
    )
}

export default SplashItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'yellow',
        width:SplashItemWidth,
        justifyContent:"center",
        alignItems:"center",
        margin:1
    }
})

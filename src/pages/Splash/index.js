import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DanakuLogo } from '../../assets/assets'
// import { DanainText } from '../../assets/assets/SPLASH'

import { Colors } from '../../utils'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('SwiperScreen')
        }, 3000);
    })

    return (
        <View style={styles.container}>
            <Image source={DanakuLogo} style={styles.image} />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#118EEA'
    },
    image: {
        height: 40,
        // backgroundColor: 'red',
        width: 250
    }
})

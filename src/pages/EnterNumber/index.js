import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DanainText } from '../../assets/assets/SPLASH'
import { IconApp } from '../../assets/assets/top-icon'
import { SplashItem } from '../../components'

const EnterNumber = () => {
    return (
        <View style={styles.page}>
            <View style={styles.logo_wrapper}>
                {/* <Image source={<IconApp/>} height={50} width={50}/>
                <Image source={<DanainText/>} height={50} width={60}/> */}
            </View>
            <SafeAreaView style={styles.scrool_wrapper}>
                <ScrollView  horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                >
                    <SplashItem i={1}/>
                    <SplashItem i={2}/>
                    <SplashItem i={3}/>
                </ScrollView>
            </SafeAreaView>
            <Text>Enter your mobile number to continue</Text>
            {/* <TextInput/> */}
        </View>
    )
}

export default EnterNumber

const styles = StyleSheet.create({
    logo_wrapper:{
        flexDirection:"row"
    },
    page:{
        flex:1,
        justifyContent:"space-around"
    },
    scrool_wrapper:{
        flex:1,
        flexDirection:"row",
        backgroundColor:'red'
    }
})

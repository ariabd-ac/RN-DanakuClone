import React from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DanainText, SplashIcon1,SplashIcon2,SplashIcon3 } from '../../assets/assets/SPLASH'
import { IconApp } from '../../assets/assets/top-icon'
import { SplashItem } from '../../components'
import { Colors } from '../../utils'

const EnterNumber = () => {
    return (
        <View style={styles.page}>
            <View style={styles.logo_wrapper}>
                <Image source={IconApp} style={styles.logo} resizeMode='contain'/>
                <Image source={DanainText} style={styles.danainText} resizeMode='contain'/>
            </View>
            <SafeAreaView style={styles.scrool_wrapper}>
                <ScrollView  horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                >
                    <SplashItem title='The digital wallset for you!' desc='Keep your cash as well as debit/credit cards seanlessly in DANA' imageSource={SplashIcon1}/>
                    <SplashItem title='Payments are easier than ever!' desc='Shopping at merchants?Use scan QRIS.Online Shopping?Use send money' imageSource={SplashIcon2}/>
                    <SplashItem title='Stay safe with DANA!' desc='DANA Protection secures your money and data,complete with PIN code for a better security' imageSource={SplashIcon3}/>
                </ScrollView>
            </SafeAreaView>
            <StatusBar/>
            <Text>Enter your mobile number to continue</Text>
            {/* <TextInput/> */}
        </View>
    )
}

export default EnterNumber

const styles = StyleSheet.create({
    logo_wrapper:{
        flexDirection:"row",
        backgroundColor:Colors.header,
        justifyContent:"center",
        paddingVertical:15,
        alignItems:"center"
    },
    logo:{
        height:30,
        width:30,
        marginRight:10
    },
    danainText:{
        height:15,
        width:100,
    },
    page:{
        flex:1,
        justifyContent:"space-around",
        backgroundColor:Colors.background
    },
    scrool_wrapper:{
        flex:1,
        flexDirection:"row",
        backgroundColor:'red'
    }
})

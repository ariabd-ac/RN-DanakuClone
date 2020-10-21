import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import { DanainText, SplashIcon1,SplashIcon2,SplashIcon3 } from '../../assets/assets/SPLASH'
import { IconApp } from '../../assets/assets/top-icon'
import { Button, SplashItem } from '../../components'
import { Colors } from '../../utils'

const OnBoarding = () => {

     const dot=<View
                style={{
                backgroundColor:'rgba(255,255,255,.3)',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7,
                }}
            />
     const activeDot=<View
                style={{
                backgroundColor:'#fff',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7,
                }}
            />
     


    return (
        <View style={styles.page}>
            <View style={styles.logo_wrapper}>
                <Image source={IconApp} style={styles.logo} resizeMode='contain'/>
                <Image source={DanainText} style={styles.danainText} resizeMode='contain'/>
            </View>
            
            <Swiper 
                loop={false} 
                showsButtons 
                dot={dot} 
                activeDot={activeDot}
                >
                <SplashItem    
                    titleText='activate danain' 
                    imageSource={SplashIcon1} 
                    desc='Activate your DANAIN account now and have the convenience of transactions such as credit,bils,and installments'/>
                <SplashItem 
                    titleText='guaranteed 100% secure' 
                    imageSource={SplashIcon2} 
                    desc='DANAIN provides the most advanced security feature and data storage system that guarantee your fund and all a your transaction are 100% secure!'/>
                <SplashItem 
                    titleText='send danain' 
                    imageSource={SplashIcon3} 
                    desc='Send DANAIN to anymore,anytime and anywhere without cost!'/>
            </Swiper>
                
            <View style={styles.footer}>
                <Button text='SKIP' onPress={()=>console.log('SKIP')}/>
                <Text style={styles.footer_text}>
                    By tapping skip button,you agree to our Terms & Conditions
                </Text>
            </View>
            {/* <TextInput/> */}
        </View>
    )
}

export default OnBoarding

const styles = StyleSheet.create({
    logo_wrapper:{
        flexDirection:"row",
        backgroundColor:Colors.header,
        justifyContent:"center",
        paddingVertical:30,
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
        backgroundColor:Colors.header
    },
    scrool_wrapper:{
        // flex:1,
        // flexDirection:"row",
        // backgroundColor:'red'
    },
    footer:{
        padding:20
    },
    footer_text:{
        color:Colors.background,
        marginTop:20
    }
})

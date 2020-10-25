import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { BackIcon } from '../../../assets/assets'
import { DanainText } from '../../../assets/assets/SPLASH'
import { Colors } from '../../../utils'

const Header = ({isNext,onPress,isDisable,isBack,title}) => {

    const HeaderTitle=()=>{
        if(title != null){
            return <Text style={styles.title}>{title}</Text>
        }

        return <Image source={DanainText} style={{width: 100, height: 25, }} resizeMode='contain'/>
    }
    return (
        <View style={styles.container}>
            <View style={styles.container_side}>
                {
                    isBack && (
                        <Image source={BackIcon} style={styles.backIcon}/>
                    )
                }
            </View>
            <View style={styles.container_title}>
                <HeaderTitle/>
            </View>
            <View style={styles.container_side}>
            {
                isNext && (
                isDisable ?
                <View>
                    <Text style={styles.text_buttonDisable}>Next</Text>
                </View>
                :
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.text_button}>Next</Text>
                </TouchableOpacity>
                )
            }
            </View>
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
    },container_title:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    },container_side:{
        width:40,  
    },
    backIcon:{
        height:18,width:18
    },title:{
        fontSize:20,
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        color:Colors.background,
    },
    titleLogo:{
        height:60,
        width:100,
    },
    text_button:{
        color:Colors.background,
        fontSize:14
    },
    text_buttonDisable:{
        color:Colors.blue2
    }
})

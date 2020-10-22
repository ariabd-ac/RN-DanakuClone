import React from 'react'
import { Image,ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ImageKirimSiapaCard } from '../../../assets/assets'
import { Colors } from '../../../utils'
import { Gap, Input } from '../../kecil'

const FormKirim = () => {
    return (
        <View style={styles.container}>
            <View style={styles.banner_container}>
                <Image source={ImageKirimSiapaCard} style={styles.banner_kirim} resizeMode='cover'/>
            </View>
            <View style={styles.container_form}>
                <Gap height={10}/>
                <Input placeholder='Ketik nomor telepon atau nama'/>
                <Gap height={10}/>
                <Input placeholder='Masukan nominal yang ingin dikirim'/>
            </View>
        </View>
    )
}

export default FormKirim

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.background,
        justifyContent:'space-between',
        alignItems:"center",
        flex:1,
        backgroundColor:Colors.background
    },banner_kirim:{
        borderRadius:10,
        width:400,
        height:120,
    },banner_container:{
        backgroundColor:'blue',
        flex:1,
        padding:10,
        paddingLeft:20,
        backgroundColor:Colors.background
    },container_form:{
        
        width:'100%'
    }
})

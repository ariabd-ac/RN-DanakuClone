import React from 'react'
import { Image,ImageBackground, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ImageKirimSiapaCard } from '../../../assets/assets'
import { Colors } from '../../../utils'
import { Gap, Input } from '../../kecil'

const FormKirim = ({dataForm,setForm}) => {
    return (
        <View style={styles.container}>
            <View style={styles.banner_container}>
                {/* <Image source={ImageKirimSiapaCard} style={styles.banner_kirim} resizeMode='cover'/> */}
                <View style={{flexDirection: 'row', flex: 1}}>
                    <TouchableOpacity>
                        <View style={{flexDirection: 'column', width: '60%', }}>
                            <View style={{width: 50, height: 49, borderRadius: 3,}}>
                                <Image source={require('../../../assets/assets/KirimDanaku/kirimsiapa-card.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, }}/>
                            </View>
                            <Text style={{marginTop: 6}}>Scan Via QR CODE</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection: 'column', width: '60%', }}>
                            <View style={{width: 49, height: 49, borderRadius: 3,}}>
                                <Image source={require('../../../assets/assets/KirimDanaku/whatsapp.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, }}/>
                            </View>
                            <Text style={{marginTop: 6}}>Scan Via QR CODE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{}}>
                    <View style={{width: 211, height: 122, borderRadius: 3, marginLeft: 10}}>
                        <Image source={require('../../../assets/assets/KirimDanaku/iconright.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, }}/>
                    </View>
                </View>
            </View>
            <View style={styles.container_form}>
                <Gap height={10}/>
                <Input placeholder='Ketik nomor telepon atau nama' value={dataForm.noTelp} onChangeText={(e)=>setForm('noTelp',e)}/>
                <Gap height={10}/>
                <Input placeholder='Masukan nominal yang ingin dikirim' value={dataForm.nominal} onChangeText={(e)=>setForm('nominal',e)}/>
            </View>
        </View>
    )
}

export default FormKirim

const styles = StyleSheet.create({
    container:{
        // backgroundColor:Colors.background,
        justifyContent:'space-between',
        alignItems:"center",
        flex:1,
        // backgroundColor:Colors.background
        backgroundColor: '#FFFFFF'
    },banner_kirim:{
        borderRadius:10,
        width:400,
        height:120,
    },banner_container:{
        // backgroundColor:'blue',
        flex:1,
        padding:10,
        paddingLeft:20,
        // backgroundColor:'red',
        flexDirection: 'row',
    },container_form:{
        
        width:'100%'
    }
})

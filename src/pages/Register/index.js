import React, { useState } from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Button, Gap, Header, Input } from '../../components'
import { Colors, __storeData } from '../../utils'

const Register = ({navigation}) => {
    const [noTelp,setNoTelp]=useState('')
    const [nama,setNama]=useState('')
    const [jenisKelamin,setJenisKelamin]=useState(1)
    const [alamat,setAlamat]=useState('')
    
    const register=()=>{

        const urlRegister='http://wsdanaku.com.pemalicomal.com/register'
        const dataUser={
            no_telp:`+62${noTelp}`,
            nama_user:nama,
            jenis_kelamin:jenisKelamin,
            alamat:alamat,
            saldo:0
        }
        let configFetch={
            method:'POST',
                mode:'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(dataUser)
        }
        fetch(urlRegister,configFetch)
            .then(res=>{return res.json()})
            .then(res=>{
                alert(res.message)
                if(res.status==true){
                    __storeData('user',dataUser)
                    navigation.navigate('MainApp')
                }
            }).catch(err=>{
                alert(err.message)
            })
    }
    return (
        <View style={styles.container}>
            <Header title='REGISTER DANAKU'/>
            <Gap height={40}/>
            <Input placeholder='No Telp' label='No Telp' value={noTelp} onChangeText={(e)=>setNoTelp(e)}/>
            <Gap height={20}/>
            <Input placeholder='Nama' label='Nama' value={nama} onChangeText={(e)=>setNama(e)}/>
            <Gap height={20}/>
            <Input type='picker' label='Jenis Kelamin' value={jenisKelamin} onChangeText={(e)=>setJenisKelamin(e)}/>
            <Gap height={20}/>
            <Input placeholder='Alamat' label='Alamat' value={alamat} onChangeText={(e)=>setAlamat(e)}/>
            <Gap height={20}/>
            <Button text='Submit' onPress={register}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:Colors.header
    }
})

export default Register

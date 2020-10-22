import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { IconArrowGrey, IconBankBCA,IconBankBNI,IconBankBRI, IconContact,IconInvitFriend,IconPlus } from '../../assets/assets'
import {Header,FormKirim,ListMenu, Gap, ListItem} from '../../components'
import { Colors } from '../../utils'


const KirimDanain = () => {

    const [enableContact,setEnableContact]=useState(false)
    const [enableBankList,setEnableBankList]=useState(false)
    

    return (
        <View style={styles.page}>
            <Header title='Kirim Danain' isBack/>
            <ScrollView >
                <View style={styles.container}>
                    <Text style={styles.h1}>Siapa yang ingin anda kirim</Text>
                    <Gap height={15}/>
                    <Text style={styles.h2}>Silahkan memilih penerima</Text>
                    <Gap height={15}/>
                    <FormKirim/>
                    <Gap height={15}/>
                    <Text style={styles.h2}>BANK TERSIMPAN</Text>
                    <Gap height={15}/>
                </View>
                <ListItem 
                    IconListLeft={IconPlus}
                    title='Kirim ke Rekening Bank'
                    colorTite={Colors.header}
                    fontSizeTitle={16}
                    IconListRight={IconArrowGrey} 
                    onPress={()=>setEnableBankList(!enableBankList)}/>
                <View style={styles.container}>
                    {
                        enableBankList &&
                        <View>
                            <ListItem IconListLeft={IconBankBCA} title='BCA' IconListRight={IconArrowGrey}/>
                            <ListItem IconListLeft={IconBankBNI} title='BNI' IconListRight={IconArrowGrey}/>
                            <ListItem IconListLeft={IconBankBRI} title='BRI' IconListRight={IconArrowGrey}/>
                        </View>
                    }
                    <Gap height={15}/>
                    <Text style={styles.h2}>SEMUA KONTAK</Text>
                    <Gap height={15}/>
                </View>
                <ListItem 
                    IconListLeft={IconPlus}
                    title='Kirim ke Nomor Telepon'
                    colorTite={Colors.header}
                    fontSizeTitle={16}
                    IconListRight={IconArrowGrey} 
                    onPress={()=>setEnableContact(!enableContact)}/>
                <View style={styles.container}>
                    {
                        enableContact && (
                        <>
                            <ListItem 
                                IconListLeft={IconContact} 
                                title='Kandita Cantik Dunia Akhirat'
                                desc='08788866777'
                                />
                            <ListItem 
                                IconListLeft={IconContact} 
                                title='Kandita Cantik Dunia Akhirat'
                                desc='08788866777'
                                />
                            <ListItem 
                                IconListLeft={IconContact} 
                                title='Kandita Cantik Dunia Akhirat'
                                desc='08788866777'
                                />
                        </>)
                    }
                </View>
                <Gap height={30}/>
            </ScrollView>
        </View>
    )
}

export default KirimDanain

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:Colors.background
    },container:{
        paddingHorizontal:15,
        flex:1,
    },h1:{
        fontSize:23,
        width:200
    },h2:{
        fontSize:12
    },

})

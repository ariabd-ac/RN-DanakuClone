import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button, Gap, MidMenuItem } from '../../components'
import { Colors } from '../../utils'


export default function Home() {

  const handleBeli = () => {
    alert('Beli')
  }

  return (
    <>
      <View style={styles.containerTop}>
        <View style={{height: 27, marginTop: 20, paddingHorizontal: 20, marginBottom: 16,}}>
          {/* logo rp pesan */}
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../assets/assets/top-icon/iconapp-icon-01.png')} style={styles.topImage}/>
              <Text style={{paddingLeft: 9, textAlign: 'center', color: '#E5FFFF', fontWeight: 'bold', fontSize: 13}}>Rp. 11.289.000</Text>
            </View>
            <View style={{height: 50, width: 50, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('../../assets/assets/top-icon/chart-icon.png')} style={{height: 30, width: 30,}}/>
            </View>
          </View>
        </View>
        {/* menu item */}
        <View style={{height: 47,paddingHorizontal: 50, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, }}>
          
            <View style={{width: 28, height: 44, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
              <View>
                <Image source={require('../../assets/assets/top-icon/pindai-icon.png')} style={{height: 50, width: 50,}}/>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: '#e5ffff', textAlign:'center'}}>Pindai</Text>
              </View>
            </View>
            <View style={{width: 28, height: 44, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
              <View>
                <Image source={require('../../assets/assets/top-icon/saldo-icon.png')} style={{height: 50, width: 50,}}/>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: '#e5ffff', textAlign:'center'}}>Pindai</Text>
              </View>
            </View>
            <View style={{width: 28, height: 44, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
              <View>
                <Image source={require('../../assets/assets/top-icon/kirim-icon.png')} style={{height: 50, width: 50,}}/>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: '#e5ffff', textAlign:'center'}}>Pindai</Text>
              </View>
            </View>
            <View style={{width: 28, height: 44, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
              <View>
                <Image source={require('../../assets/assets/top-icon/minta-icon.png')} style={{height: 50, width: 50,}}/>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: '#e5ffff', textAlign:'center'}}>Pindai</Text>
              </View>
            </View>
          </View>

        {/* Beli */}
        <View style={{backgroundColor: '#ffffff' , height: 80, width: 400, marginLeft: 12, borderTopLeftRadius: 7, borderTopRightRadius: 7, top: -4}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, paddingTop: 10}}>
            <View style={{flexDirection: 'row',}}>
              <Image source={require('../../assets/assets/mid-icon/pulsa-icon2.png')} style={{height: 39, width: 26}}/>
              <View style={{marginLeft: 20,}}>
                <Text style={{ color: '#282728'}}>Pulsa</Text>
                <Text style={{ fontSize: 10, color: '#E4B170'}}>Gan Beli Gan!</Text>
              </View>
            </View>
            <Button text="Beli" onPress={() => handleBeli()}/>
          </View>
        </View>
      </View>
      <View style={styles.containerBootom}>
        {/* mid content */}
        <View style={{backgroundColor: '#FFFFFF', height: 168, borderBottomLeftRadius: 7, borderBottomRightRadius: 7,width: 400, top: 0, backgroundColor: '#ffffff', marginHorizontal: 12}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', flexWrap: 'wrap', }}>
            <MidMenuItem img={require('../../assets/assets/mid-icon/games-icon.png')} title="Game"/>
            <MidMenuItem img={require('../../assets/assets/mid-icon/listrik-icon.png')} title="Listrik"/>
            <MidMenuItem img={require('../../assets/assets/mid-icon/bpjs-icon.png')} title="BPJS"/>
            <MidMenuItem img={require('../../assets/assets/mid-icon/telepon-icon.png')} title="Telpon"/>
            <MidMenuItem img={require('../../assets/assets/mid-icon/pascabayar-icon.png')} title="Pascabayar"/>
            <MidMenuItem img={require('../../assets/assets/mid-icon/tariksaldo-icon.png')} title="Tarik Saldo"/>
            <MidMenuItem img={require('../../assets/assets/mid-icon/danakaget-icon.png')} title="Dana Kaget"/>
            <MidMenuItem img={require('../../assets/assets/mid-icon/lihatsemua-icon.png')} title="Lihat Semua"/>
          </View>
        </View>
        {/*  */}
        <Gap height={20}/>
        {/* ada promo? */}
        <View style={{height: 138, width: 400, borderBottomRightRadius: 4, borderBottomLeftRadius: 4, marginLeft: 12}}>
          <View style={{backgroundColor: Colors.background, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 18, height: 49, alignItems: 'center', borderTopLeftRadius: 4, borderTopRightRadius: 4, borderBottomRightRadius: 4, borderBottomLeftRadius: 4,}}>
            <View>
              <View>
                <Text>Ada Promo Nih Sist!</Text>
                <Text>Hidupmu indah bila shoping terus</Text>
              </View>
            </View>
            <View style={{width: 94}}>
              <Button text="Lihat Semua" style={{backgroundColor: 'transparant', padding: 8, borderColor: Colors.header, borderWidth: 2, borderRadius: 4,}} onPress={() => handleBeli()}/>
            </View>
          </View>
          <ImageBackground imageStyle={{borderBottomLeftRadius: 4, borderBottomRightRadius: 4}} source={require('../../assets/assets/promo-icon/promo1.png')} style={{width: '100%', height: 100, position: 'relative', borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}/>
        </View>
        {/*  */}
        <Gap height={20}/>
        {/* Iklan */}
        <View style={{width: 400, height: 90, marginHorizontal: 12 }}>
          <View style={{position: 'relative'}}> 
          <Image source={require('../../assets/assets/promo-icon/promo4.png')}  style={{height: 90, width: '100%', borderRadius: 6, resizeMode: 'cover' }}/>
          </View>
        </View>
        {/*  */}
        <Gap height={20}/>
        {/* Whatsnew */}
        <View style={{marginHorizontal: 12, flexDirection: 'row', justifyContent: 'space-between', height: 36,backgroundColor: 'blue'}}>
          <View style={{backgroundColor: 'green'}}>
            <Text>What's New</Text>
            <Text>The best new of the week!</Text>
          </View>
          <View style={{flex: 1,backgroundColor: 'pink', justifyContent:'center', alignItems: 'center'}}>
            <Image source={require('../../assets/asss/promo.png')} style={{height: 100, width: 50, resizeMode: 'contain'}}/>
          </View>
        </View>
        {/*  */}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  containerTop: {
    // flex: 1,
    height: 219,
    backgroundColor: '#118EEA',
    
  },
  containerBootom: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    
  },
  topImage:{
    width: 25,
    height: 25
  },
})

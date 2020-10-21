import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from '../../components'

export default function Home() {
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
        <View style={{height: 47,paddingHorizontal: 50, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, marginBottom: 30}}>
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
      </View>
      <View style={styles.containerBootom}>
        <View style={{backgroundColor: '#FFFFFF', height: 246, width: 400, top: -80, borderRadius: 7, backgroundColor: 'pink'}}>
          <View style={{height: 81, flexDirection: 'row', flex: 1,}}>
            <View style={{flexDirection: 'row',height: 81, flex: 1, justifyContent: 'space-between', backgroundColor: 'green',}}>
              <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center', paddingLeft: 26,}}>
                <Image source={require('../../assets/assets/mid-icon/pulsa-icon2.png')} style={{width: 28, height: 39}}/>
                <View style={{paddingLeft: 25}}>
                  <Text style={{color: '#313332', fontSize: 12, fontWeight: 'bold'}}>Pulsa</Text>
                  <Text style={{color: '#D1B784', fontSize: 10, fontWeight: 'bold'}}>Beli Pulsa Yuk!</Text>
                </View>
              </View>
            <Button text="Beli"/>
            </View>
          </View>
        </View>
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
    alignItems: 'center'
  },
  topImage:{
    width: 25,
    height: 25
  },
})

import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { BannerIklanItem, Button, CardItemSwiper, Gap, MidMenuItem, NewsItem } from '../../components'
import { Colors } from '../../utils'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-ionicons'



export default function Home() {

  const handleBeli = () => {
    alert('Beli')
  }


  const IconBar = () => (
    <View>
      <Icon name="arrow-forward" />
      <Icon ios="ios-add" android="md-add" />
    </View>
  )

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
        <View style={{height: 47,paddingHorizontal: 50, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20,}}>
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
        <View style={styles.Gap}>
          <Gap height={10}/>
        </View>
       
      </View>
      <View style={styles.containerBootom}>
        <ScrollView>
        {/* mid content */}
        <View style={{backgroundColor: '#118EEA',}}>
        <Gap height={10}/>
        </View>
        <View style={{backgroundColor: '#118EEA',}}>
          <View style={{backgroundColor: '#ffffff' , height: 80, width: 400, marginLeft: 12, borderTopLeftRadius: 7, borderTopRightRadius: 7,}}>
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
                <Text style={{fontWeight: 'bold', color: '#000000', fontSize: 14}}>Ada Promo Gila!</Text>
                <Text style={{color: '#313131', fontSize: 11}}>Hidupmu indah bila shoping terus</Text>
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
        <View style={{marginHorizontal: 12, flexDirection: 'row', justifyContent: 'space-between', height: 36,}}>
          <View style={{}}>
            <Text style={{fontWeight: 'bold', color: '#000000', fontSize: 14}}>What's New</Text>
            <Text style={{color: '#313131', fontSize: 11}}>The best new of the week!</Text>
          </View>
          <View style={{justifyContent:'center', alignItems: 'center'}}>
            <Image source={require('../../assets/asss/promo.png')} style={{height: 100, width: 100, resizeMode: 'contain'}}/>
          </View>
        </View>
        {/*  */}
        <Gap height={20}/>
        
        {/* iklan banner */}
        <Swiper 
                loop={true} 
                dot={dot} 
                activeDot={activeDot}
                style={{marginHorizontal: 12, height: 100}}
                >
            <BannerIklanItem img={require('../../assets/asss/1.jpg')}/>
            <BannerIklanItem img={require('../../assets/asss/2.png')}/>
            <BannerIklanItem img={require('../../assets/asss/3.png')}/>
            <BannerIklanItem img={require('../../assets/asss/4.png')}/>
            <BannerIklanItem img={require('../../assets/asss/5.png')}/>
        </Swiper>
        {/*  */}
        <Gap height={20}/>
        {/* card */}
          {/* <View style={{backgroundColor: 'red', height: 50, width: 50}}></View> */}
          <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
            <CardItemSwiper img={require('../../assets/asss/card2.png')} />
            <CardItemSwiper img={require('../../assets/asss/card1.png')} />
            <CardItemSwiper img={require('../../assets/asss/card3.png')} />
            <CardItemSwiper img={require('../../assets/asss/card4.png')} />
            <CardItemSwiper img={require('../../assets/asss/card5.png')} />
            <CardItemSwiper img={require('../../assets/asss/card6.png')} />
            <CardItemSwiper img={require('../../assets/asss/card7.png')} />
          </ScrollView>
          
        {/*  */}
        <Gap height={20}/>
        {/* Pendapat Dana */}
        <View style={{backgroundColor: '#FFFFFF',height: 100, width: 400, marginHorizontal: 12, borderColor: '#E8E8E8', borderWidth: 1, borderRadius: 3}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, paddingLeft: 10}}>
            <View style={{width: 47, height: 47, borderRadius: 3,}}>
              <Image source={require('../../assets/asss/icon_card.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, }}/>
            </View>
            <View style={{flex: 1, marginLeft: 20}}>
              <Text style={{fontSize: 13,fontWeight: 'bold' ,color: '#757575'}}>Apa Pendapat Anda Tentang DANA?</Text>
              <Text style={{fontSize: 13, color: '#757575'}}>Kami terus berusaha memberikan pengalaman terbaik untuk Anda. Maka kami ingin mendengar pendapat Anda tentang DANA.</Text>
            </View>
          </View>
        </View>
        {/*  */}
        <Gap height={20}/>
        {/* nerby */}
        <View style={{marginHorizontal: 12, height: 176,}}>
          <View>
            <View>
              <Text style={{fontWeight: 'bold',color: '#1B1B1B' ,fontSize: 14}}>Nearby</Text>
              <Text style={{color: '#656565', fontSize: 13}}>Find DANA merchants near your area!</Text>
            </View>
            <View style={{backgroundColor: '#ffffff', marginTop: 10, height: 133, borderRadius: 4, flexDirection: 'row', width: 400, position: 'relative', alignItems: 'center', borderColor: '#E8E8E8', borderWidth: 1}}>
              <View>
                <View style={{backgroundColor: '#ffffff', width: 270, paddingLeft: 16}}>
                  <Text style={{color: '#1B1B1B', fontWeight: 'bold'}}>Looks like your location service is off. Please trun it on to use Nearby feature.</Text>
                  <View style={{marginTop: 16, width: 100, }}>
                    <Button text="ACTIVE" style={{borderRadius:4, borderColor: '#67B7F1', borderWidth: 1,backgroundColor: '#ffffff', height: 27, padding: 2,}}/>
                  </View>
                </View>
              </View>
              <View style={{width: 100, height: 100, borderRadius: 4, position: 'absolute', left: 300}}>
                <Image source={require('../../assets/asss/nerby.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, }}/>
              </View>
            </View>
          </View>
        </View>
        {/*  */}
        {/* news */}
        <Gap height={20}/>
        <View style={{marginHorizontal: 12,}} >
          <View style={{marginBottom: 5}}>
            <Text style={{color: '#B6B6B6'}}>DANA NEWS</Text>
          </View>
          <NewsItem img={require('../../assets/asss/cardd/card1.png')} judul="Gratis di Endorse Artis" desc="Yuk gabung dana bisnis"/>
          <NewsItem img={require('../../assets/asss/cardd/card2.png')} judul="Beli Item Game Yuk!" desc="Dapetin di dana.id/games"/>
          <NewsItem img={require('../../assets/asss/cardd/card3.png')} judul="Ikutin cerita usaha" desc="Intip Business Hack ini!"/>
          <NewsItem img={require('../../assets/asss/cardd/card4.png')} judul="Transfer ke Bank di DANA" desc="GRATIS biaya admin!"/>
          <NewsItem img={require('../../assets/asss/cardd/card5.png')} judul="Pake Face Login di DANA" desc="Aman, cepat & praktis!"/>
          <NewsItem img={require('../../assets/asss/cardd/card6.png')} judul="DANA Belanja di Rumah" desc="Chat, pesan bayar!"/>
          <NewsItem img={require('../../assets/asss/cardd/card7.png')} judul="Kenalin Eazy Eats" desc="Gercep pesan & ambil makan!"/>
          <NewsItem img={require('../../assets/asss/cardd/card8.png')} judul="BARU di Nearby" desc="Review toko favorit!"/>
          <NewsItem img={require('../../assets/asss/cardd/card9.png')} judul="BARU di Delivery" desc="Pilih kurir buat paketmu!"/>
          <NewsItem img={require('../../assets/asss/cardd/card10.png')} judul="Scan DANA QRIS" desc="Bayar lebih praktis!"/>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{marginTop: 10, height: 20, width: 90, justifyContent: 'center', alignItems: 'center'}}>
              <Button style={{backgroundColor: 'transparant', padding: 5, borderColor: Colors.header, borderWidth: 2, borderRadius: 4,}} onPress={() => handleBeli()} text="LEAD MORE"/>
            </View>
          </View>
        </View>
        {/*  */}
        <Gap height={20}/>
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  containerTop: {
    // flex: 1,
    height: 140,
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
  Gap:{
    backgroundColor: '#118EEA',
  }
})

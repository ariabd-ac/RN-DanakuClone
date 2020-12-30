import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Colors} from '../../utils';
import {CardPulsa, Gap, Header, Input, MidMenuItem} from '../../components';

const IsiSaldo = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumber = (e) => {
    // let regex=/^[0-9\b]+$/
    // if(e!='' && regex.test(e)){
    //     setPhoneNumber(e)
    // }
    setPhoneNumber(e.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ''));
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.boxSize}>
            <Image
              style={styles.bannerImage}
              source={require('../../assets/assets/banner_saldo.png')}
            />
          </View>
          <View style={styles.rowNumber}>
            <View style={styles.number}>
              <Text
                style={{
                  position: 'relative',
                  left: 13,
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Nomor HP
              </Text>
              <Text
                style={{
                  position: 'relative',
                  right: 60,
                  color: '#4D8AB6',
                  fontSize: 12,
                  fontWeight: 'normal',
                }}>
                No. Pasca Bayar ?
              </Text>
            </View>
            <View style={styles.boxPhoneNum}>
              <View style={styles.inputNumber}>
                <Input
                  placeholder="Enter Phone Number...."
                  onChangeText={handlePhoneNumber}
                  value={phoneNumber}
                />
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{height: 34, width: 34}}
                  source={require('../../assets/assets/saldo-icon/bank-icon.png')}
                />
              </View>
            </View>
            <Gap height={39} />
          </View>
          <View style={styles.rowHarga}>
            <View style={{marginHorizontal: 18, marginTop: 7}}>
              <Text style={{fontWeight: 'bold'}}>Pulsa</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',

                marginHorizontal: 6,
                justifyContent: 'space-between',
              }}>
              <CardPulsa pulsa={5} harga={4509} />
              <CardPulsa pulsa={10} harga={9.042} />
              <CardPulsa pulsa={20} harga={19.242} />
              <CardPulsa pulsa={30} harga={29.042} />
              <CardPulsa pulsa={50} harga={49.042} />
              <CardPulsa pulsa={100} harga={99.042} />
              <CardPulsa pulsa={200} harga={187.042} />
              <CardPulsa pulsa={250} harga={237.042} />
              <CardPulsa pulsa={300} harga={287.042} />
              <CardPulsa pulsa={400} harga={387.042} />
              <CardPulsa pulsa={500} harga={487.042} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default IsiSaldo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    // backgroundColor: Colors.backgroundColor,
  },
  boxSize: {
    // flex: 1,
    backgroundColor: 'pink',
    // position: 'relative',
    // marginTop: 50,
  },
  bannerImage: {
    height: 90,
    width: '100%',
    // position: 'absolute',
    backgroundColor: 'grey',
  },
  rowNumber: {
    // flex: 1,
    backgroundColor: Colors.grey1,
    // height: 167,
  },
  number: {
    flexDirection: 'row',
    // padding: 14,
    marginTop: 14,
    marginHorizontal: 12,
    justifyContent: 'space-between',
  },
  inputNumber: {
    // backgroundColor: 'yellow',
    padding: 5,
    marginHorizontal: 12,
    width: 350,
  },
  boxPhoneNum: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  rowHarga: {
    backgroundColor: Colors.background,
    flex: 1,
  },
});

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../../utils';

const CardPulsa = ({pulsa, harga}) => {
  return (
    <>
      <TouchableOpacity>
        <View
          style={{
            // backgroundColor: 'yellow',
            height: 100,
            width: 180,
            margin: 10,
            borderRadius: 4,
            borderColor: Colors.grey1,
            borderWidth: 3,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              marginHorizontal: 12,
            }}>
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 25}}>
              {pulsa}rb
            </Text>
            <Text
              style={{color: Colors.blue2, fontWeight: 'bold', fontSize: 12}}>
              Harga Rp.{harga}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CardPulsa;

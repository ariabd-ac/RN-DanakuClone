import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const HeaderItem = ({img, title, onPress}) => {
  return (
    <View style={{width: 28, height: 44, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <Image source={img} style={{height: 50, width: 50,}}/>
          <Text style={{fontSize: 13, fontWeight: 'bold', color: '#e5ffff', textAlign:'center'}}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderItem

import React from 'react'
import { View, Text, Image } from 'react-native'

const MidMenuItem = ({img, title}) => {
  return (
    <View style={{width: '25%', justifyContent: "center", alignItems: 'center',marginBottom: 18,}}>
      <Image source={img} style={{height: 50, width: 50}}/>
      <Text style={{textAlign: 'center'}}>{title}</Text>
  </View>
  )
}

export default MidMenuItem

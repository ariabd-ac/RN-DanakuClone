import React from 'react'
import { View, Image } from 'react-native'

const BannerIklanItem = ({img}) => {
  return (
    <View style={{width: 400, height: 100, borderRadius: 4}}>
      <Image source={img} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, }}/>
    </View>
  )
}

export default BannerIklanItem

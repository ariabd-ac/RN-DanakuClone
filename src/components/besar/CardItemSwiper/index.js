import React from 'react'
import { View, Image } from 'react-native'

const CardItemSwiper = ({img}) => {
  return (
    <View style={{marginRight: 16}}>
      <View style={{width: 137, height: 200, borderRadius: 3, backgroundColor: 'red'}}>
        <Image source={img} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, }}/>
      </View> 
    </View> 
  )
}

export default CardItemSwiper

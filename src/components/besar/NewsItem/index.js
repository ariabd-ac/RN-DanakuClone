import React from 'react'
import { View, Text, Image} from 'react-native'
import Icon from 'react-native-ionicons'

const NewsItem = ({img, judul, desc}) => {
  return (
    <View style={{backgroundColor: '#ffffff', flexDirection: 'row', alignItems: 'center', height: 80, borderRadius: 4, borderColor: '#E8E8E8', borderWidth: 1, marginVertical: 3}}>
      <View style={{justifyContent: 'flex-start', flexDirection: 'row', paddingLeft: 16, width: 380,}}>
        <View style={{width: 50, height: 50, backgroundColor: 'pink'}}>
          <Image source={img} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, }}/>
        </View>
        <View style={{paddingLeft: 20, justifyContent: 'center'}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#4A4A4A'}}>{judul}</Text>
          <Text style={{fontSize: 13, fontWeight: 'normal', color: '#4A4A4A'}}>{desc}</Text>
        </View>
      </View>
      <View style={{justifyContent: 'flex-end',justifyContent: 'center'}}>
        <Text>
          <Icon ios="ios-arrow-forward" android="ios-arrow-forward"  color="#108EE9" size={20}/>
        </Text>
      </View>
    </View>
  )
}

export default NewsItem

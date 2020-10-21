import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const ActionButton = ({onPress, title}) => {
  return (
    <TouchableOpacity style={{ backgroundColor: '#61a756', paddingHorizontal: 12, paddingVertical: 12, alignSelf: 'flex-end', borderRadius: 4 }} onPress={onPress}>
    <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ActionButton

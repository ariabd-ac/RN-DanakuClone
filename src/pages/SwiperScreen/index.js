import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'

const SwiperScreen = () => {
  return (
    <>
      <StatusBar backgroundColor="#118eea" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.viewLogo}>
            <Image
              source={require('../../assets/assets/danain-text.png')}
              style={styles.imageLogo}
            />
          </View>
      </View>
    </>
  )
}

export default SwiperScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#118eea',
  },
  viewLogo: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  imageLogo: {
    width: 125,
    height: 20,
  },
})

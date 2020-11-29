import AsyncStorage from '@react-native-async-storage/async-storage'


export const __storeData = async (key,value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      // saving error
      console.log(e)
    }
}


export const __getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
    console.log(e)
  }
}

export const __removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch(e) {
    // remove error
    console.log(e)
  }

  console.log('Done.')
}

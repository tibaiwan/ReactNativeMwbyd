import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify({data: value})
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    // saving error
  }
}

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return JSON.parse(jsonValue).data
  } catch(e) {
    // error reading value
  }
}

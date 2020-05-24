import geolocation from '@react-native-community/geolocation';

export const getLocation = () => {
  return new Promise((resolve, reject) => {

    geolocation.getCurrentPosition(res => {
      resolve(res.coords)
    });
  })
}

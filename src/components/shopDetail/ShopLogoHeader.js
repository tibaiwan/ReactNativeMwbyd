import React from 'react';
import { StyleSheet, ImageBackground, View, Dimensions } from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 200;

export const ShopLogoHeader = (props) => {

  const { logo } = props;
  console.log('logo', logo);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={{ uri: logo}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: BannerHeight,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    width: BannerWidth,
    height: BannerHeight,
    resizeMode: 'cover'
  }
});

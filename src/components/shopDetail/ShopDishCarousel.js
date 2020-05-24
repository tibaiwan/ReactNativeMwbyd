import React from 'react';
import Swiper from 'react-native-swiper';
import { StyleSheet, ImageBackground, View, Dimensions } from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 200;

export const ShopDishCarousel = (props) => {

  let { banner } = props;
  banner = banner.length >= 6 ? banner.splice(0, 6) : banner;

  return (
    <View style={styles.container}>

      <Swiper
        style={styles.wrapper}
        paginationStyle={{bottom: 2}}
        activeDotColor={'red'}>
        {
          banner.map((image, index) => (
            <View key={index}>
              <ImageBackground style={styles.image} source={{ uri: image}} />
            </View>
          ))
        }
      </Swiper>

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

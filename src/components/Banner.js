import React from 'react';
import Swiper from 'react-native-swiper'
import { StyleSheet, ImageBackground, View, Dimensions, Text } from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 140;

export const Banner = (props) => {
  const { banners } = props;
  return (
    <View style={styles.container}>

      <Swiper
        style={styles.wrapper}
        autoplay={true}
        autoplayTimeout={3}
        paginationStyle={{bottom: 2}}
        activeDotColor={'red'}>
        {
          banners.map((image, index) => (
            <View key={index}>
              <ImageBackground style={styles.image} source={{ uri: image.picUrl}} />
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

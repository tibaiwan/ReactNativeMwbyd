import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, ImageBackground, View, Dimensions } from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 140;

export const Banner = (props) => {
  const { banners } = props;
  return (
    <View style={styles.container}>
      <Carousel
        autoplay
        autoplayTimeout={3000}
        loop
        index={0}
        pageSize={BannerWidth}
      >
        {
          banners.map((image, index) => (
            <View key={index}>
              <ImageBackground style={styles.image} source={{ uri: image.picUrl}} />
            </View>
          ))
        }
      </Carousel>
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

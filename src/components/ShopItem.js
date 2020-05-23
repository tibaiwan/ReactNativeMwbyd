import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Stars } from './Stars';

export const ShopItem = props => {
  const { shop } = props;
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ImageBackground style={styles.logo} source={{ uri: shop.logo}} imageStyle={{ borderRadius: 5 }} />
      </View>
      <View style={styles.right}>
        <View style={styles.shopName}>
          <Text style={styles.shopNameText}>{shop.shopName}</Text>
        </View>
        <View style={styles.stars}>
          <Stars avgReview={shop.avgReview}/>
          <Text style={styles.priceText, styles.greyText}>{shop.avgPrice}</Text>
        </View>
        <View style={styles.dishAndDistance}>
          <Text>{shop.styleCooking}</Text>
          <Text style={styles.greyText}>{shop.distance}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  left: {
    width: 100,
  },
  right: {

  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  shopNameText: {
    fontWeight: 'bold',
  },
  stars: {
    flexDirection: 'row',
  },
  priceText: {
    marginLeft: 10,
  },
  dishAndDistance: {
    flexDirection: 'row',
  },
  greyText: {
     color: '#999' 
  }
});

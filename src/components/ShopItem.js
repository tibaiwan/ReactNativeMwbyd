import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Stars } from './Stars';
import { formatDistance } from '../utils/util.distance';

export const ShopItem = props => {
  const { shop } = props;
  return (
    <View style={styles.container}>
      {/* LOGO */}
      <View style={styles.left}>
        <ImageBackground style={styles.logo} source={{ uri: shop.logo}} imageStyle={{ borderRadius: 5 }} />
      </View>
      {/* shop info */}
      <View style={styles.right}>
        <View style={styles.shopName}>
          <Text style={styles.shopNameText}>{shop.shopName}</Text>
        </View>
        <View style={styles.inline}>
          <View style={styles.marginR20}>
            <Stars avgReview={shop.avgReview}/>
          </View>
          <Text style={styles.greyText}>¥ {shop.avgPrice}/人</Text>
        </View>
        <View style={styles.inline}>
          <Text style={{...styles.greyText, ...styles.marginR20}}>{shop.styleCooking}</Text>
          <Text style={styles.greyText}>{formatDistance(shop.distance)}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
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
  inline: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
  },
  marginR20: {
    marginRight: 20,
  },
  greyText: {
    fontSize: 10,
    color: '#999' 
  }
});

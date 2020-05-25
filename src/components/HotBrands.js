import React from 'react';
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { SubTitle } from './SubTitle';

export const HotBrands = ({ brands, navigation }) => {
  const subTitle = '火爆餐厅';
  return (
    <View style={styles.container}>
      <SubTitle title={subTitle} />
      <View style={styles.brandWrap}>
        {
          brands.map((brand, index) => (
            <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('brandlist', { mShopId: brand.manageShopId })}>
              <View style={styles.imageWrap}>
                <Image style={styles.image} source={{uri: brand.logo}}></Image>
                <View style={styles.shopName}>
                  <Text style={styles.text}>{brand.shopName}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  brandWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageWrap: {
    width: 120,
    marginBottom: 15,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  shopName: {
    marginTop: 5,
    padding: 5,
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 11,
  }
})

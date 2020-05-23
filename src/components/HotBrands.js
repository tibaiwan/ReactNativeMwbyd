import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { SubTitle } from './SubTitle';

export const HotBrands = (props) => {
  const { brands } = props;
  const subTitle = '火爆餐厅';
  return (
    <View style={styles.container}>
      <SubTitle title={subTitle} />
      <View style={styles.brandWrap}>
        {
          brands.map((brand, index) => (
            <View key={index} style={styles.imageWrap}>
              <Image style={styles.image} source={{uri: brand.logo}}></Image>
              <View style={styles.shopName}>
                <Text style={styles.text}>{brand.shopName}</Text>
              </View>
            </View>
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  brandWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageWrap: {
    width: 120,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  shopName: {
    marginTop: 10,
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 11,
  }
})

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Stars } from '../Stars';
import { colorDarkGray } from '../../config/color';

export const ShopBaseInfo = ({ avgReview, styleCooking, avgPrice }) => {

  return (
    <View style={styles.container}>
      <View style={styles.marginRight}>
        <Stars avgReview={avgReview} size={14}/>
      </View>
      <View style={styles.marginRight}>
        <Text style={styles.text}>{styleCooking}</Text>
      </View>
      <View style={styles.marginRight}>
        <Text style={styles.text}>¥{avgPrice}/人</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  marginRight: {
    marginRight: 20,
  },
  text: {
    fontSize: 12,
    color: colorDarkGray,
  }
});

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colorDarkGray } from '../../config/color';

export const ShopTimeAddress = ({ avgReview, styleCooking, avgPrice }) => {

  return (
    <View style={styles.container}>
      <View style={styles.box}>
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  box: {
    height: 80,
    backgroundColor: '#F9F9F9'
  }
});

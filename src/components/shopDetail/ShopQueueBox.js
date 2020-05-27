import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colorNormalGray, colorLightGray, colorPaleGray } from '../../config/color';

export const ShopQueueBox = ({ }) => {

  return (
    <View style={styles.container}>
      <Text>排队</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderBottomColor: colorPaleGray,
    borderBottomWidth: 10,
  }
});

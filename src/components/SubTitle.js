import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SubTitle = ({ title }) => {
  return (
    <View style={styles.subTitle}>
      <Text style={styles.subTitleText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subTitle: {
    width: '100%',
    height: 60,
    paddingLeft: 15,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  subTitleText: {
    fontWeight: 'bold',
    fontSize: 18,
  }
})

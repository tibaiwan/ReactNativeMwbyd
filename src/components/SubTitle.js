import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SubTitle = props => {
  return (
    <View style={styles.subTitle}>
      <Text style={styles.subTitleText}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subTitle: {
    width: '100%',
    height: 50,
    lineHeight: 50,
    paddingLeft: 10,
  },
  subTitleText: {
    fontWeight: 'bold',
    fontSize: 18,
  }
})

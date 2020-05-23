import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Stars = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitleText}>{props.avgReview}星</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  subTitleText: {
  }
})

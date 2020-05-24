import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colorRed, colorLightGray } from '../config/color';

export const Stars = props => {
  const maxNum = 5;
  const size = props.size || 12;
  let { avgReview } = props;
  if (avgReview > 5) avgReview = 5;
  if (avgReview < 0 || !avgReview) avgReview = 0;

  return (
    <View style={styles.container}>
      {
        new Array(maxNum).fill(null).map((item, index) => 
          <View key={index} style={styles.starWrap}>
            <Ionicons name={'ios-star'} size={size} color={index + 1 <= avgReview ? colorRed : colorLightGray} />
          </View>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  starWrap: {
    marginRight: 1,
  }
})

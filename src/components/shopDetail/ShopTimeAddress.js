import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colorNormalGray, colorLightGray, colorPaleGray } from '../../config/color';

export const ShopTimeAddress = ({ inBusiness, shopHours, address, latitude, longitude, tel }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.line}>
          <Ionicons style={styles.prevIcon} name={'ios-time'} size={20} color={colorNormalGray} />
          <View>
            <Text>{!!inBusiness ? inBusiness : `营业时间 | ${shopHours}`}</Text>
          </View>
          <Ionicons style={styles.autoRight} name='ios-arrow-forward' size={20} color={colorLightGray} />
        </View>
        <View style={{...styles.line, ...styles.mt10}}>
          <Ionicons style={styles.prevIcon} name={'ios-home'} size={20} color={colorNormalGray} />
          <View style={styles.addressWrap}>
            <Text>{address}</Text>
          </View>
          <View style={styles.autoRight}>
            <Ionicons name={'ios-phone-portrait'} size={25} color={colorLightGray} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomColor: colorPaleGray,
    borderBottomWidth: 10,
  },
  box: {
    padding: 10,
    // height: 80,
    backgroundColor: '#F9F9F9'
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressWrap: {
    maxWidth: 250,
  },
  prevIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  mt10: {
    marginTop: 10
  },
  autoRight: {
    marginLeft: 'auto'
  }
});

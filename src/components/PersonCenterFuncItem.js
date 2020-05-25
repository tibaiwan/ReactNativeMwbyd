import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { funcItems } from '../constants/personCenterConfig';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colorGray, colorLightGray } from '../config/color';

export const PersonCenterFuncItem = (props) => {
  return (
    <View style={styles.container}>
      {
        funcItems.map((item, index) => {
          return (
            <View style={styles.item} key={index}>
              <Ionicons style={styles.itemIcon} name={item.icon} size={20} color={colorLightGray} />
              <Text style={styles.itemText}>{item.name}</Text>
              <Ionicons style={styles.arrowRight} name='ios-arrow-forward' size={20} color={colorLightGray} />
            </View>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 250,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  itemIcon: {
    marginRight: 10,
  },
  itemText: {
    color: colorGray,
  },
  arrowRight: {
    marginLeft: 'auto'
  }
});

import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Toast from 'react-native-root-toast';
import { funcItems } from '../constants/personCenterConfig';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colorGray, colorLightGray } from '../config/color';

export const PersonCenterFuncItems = ({ navigation }) => {

  const handleClickItem = (item) => {
    Toast.show(`U clicked ${item.name}`, {
      position: Toast.positions.CENTER,
    });
  }

  return (
    <View style={styles.container}>
      {
        funcItems.map((item) => {
          return (
            <TouchableWithoutFeedback key={item.id} onPress={() => handleClickItem(item)}>
              <View style={styles.item}>
                <Ionicons style={styles.itemIcon} name={item.icon} size={20} color={colorLightGray} />
                <Text style={styles.itemText}>{item.name}</Text>
                <Ionicons style={styles.arrowRight} name='ios-arrow-forward' size={20} color={colorLightGray} />
              </View>
            </TouchableWithoutFeedback>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
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

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Toast from 'react-native-root-toast';
import { orderItems } from '../../constants/personCenterConfig';

export const PersonCenterHeader = () => {

  const handleClickIcon = (item) => {
    Toast.show(`U clicked ${item.name}`, {
      position: Toast.positions.CENTER,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerTop}>
        <Image style={styles.avatar} source={require('../../assets/images/mw_logo.png')} />
        <Text style={styles.nickname}>美味不用等</Text>
      </View>
      <View style={styles.headerBottom}>
        {
          orderItems.map(item => {
            return (
              <TouchableWithoutFeedback key={item.id} onPress={() => handleClickIcon(item)}>
                <View style={styles.orderIconWrap}>
                  <Image style={styles.orderIcon} source={{uri: item.url}}/>
                  <Text style={styles.orderText}>{item.name}</Text>
                </View>
              </TouchableWithoutFeedback>
            )
          })
        }
      </View>
      <View style={styles.boudle1}></View>
      <View style={styles.boudle2}></View>
      <View style={styles.boudle3}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingTop: 20,
    height: 220,
    backgroundColor: '#fff',
  },
  headerTop: {
    flexDirection: 'row',
    height: 100,
    paddingLeft: 20,
    alignItems: 'center',
  },
  headerBottom: {
    height: 100,
    flexDirection: 'row',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  nickname: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderIconWrap: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  orderIcon: {
    width: 30,
    height: 30,
  },
  orderText: {
    marginTop: 10,
    fontSize: 12,
  },
  boudle1: {
    position: 'absolute',
    left: 0,
    bottom: 40,
    width: 130,
    height: 130,
    opacity: 0.03,
    borderRadius: 100,
    backgroundColor: 'red'
  },
  boudle2: {
    position: 'absolute',
    top: 32,
    left: 160,
    width: 55,
    height: 55,
    opacity: 0.04,
    borderRadius: 100,
    backgroundColor: 'red'
  },
  boudle3: {
    position: 'absolute',
    right: 10,
    bottom: 45,
    width: 80,
    height: 80,
    opacity: 0.04,
    borderRadius: 100,
    backgroundColor: 'red'
  }
});

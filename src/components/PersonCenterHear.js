import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { orderItems } from '../constants/personCenterConfig';

export const PersonCenterHear = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerTop}>
        
      </View>
      <View style={styles.headerBottom}>
        {
          orderItems.map(item => {
            return (
              <View style={styles.orderIconWrap} key={item.id}>
                <Image style={styles.orderIcon} source={{uri: item.url}}/>
                <Text style={styles.orderText}>{item.name}</Text>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    height: 250,
    backgroundColor: '#fff',
  },
  headerTop: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#f2f2f2'
  },
  headerBottom: {
    height: 100,
    flexDirection: 'row',
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
  }
});

import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { SubTitle } from './SubTitle';
import { ShopItem } from './ShopItem';

export const ShopList = (props) => {
  const { shops } = props;
  const subTitle = '附近的餐厅';
  return (
    <View style={styles.container}>
      <SubTitle title={subTitle} />
      <FlatList
        data={shops}
        renderItem={({ item }) => <ShopItem shop={item} />}
        keyExtractor={shop => shop.shopId}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
})

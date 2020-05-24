import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getShopDetail } from '../api/service';
import { ShopDishCarousel } from '../components/shopDetail/ShopDishCarousel';
import { ShopLogoHeader } from '../components/shopDetail/ShopLogoHeader';
import { ShopBaseInfo } from '../components/shopDetail/ShopBaseInfo';
import { ShopTimeAddress } from '../components/shopDetail/ShopTimeAddress';

export const ShopDetail = (props) => {
  const { route: { params: { shopId } }, navigation } = props;
  // console.log('ShopDetail shopId', shopId);
  // let shopId = 384368;

  const [loading, setLoading] = useState(true)
  const [shopData, setShopData] = useState({})

  useEffect(() => {
    getShopDetail({ shopId }).then(res => {
      setShopData(res);
      setLoading(false);
    });
  }, [shopId]);

  // 店铺名称
  renderShopName = shopName => <View style={styles.shopName}><Text style={styles.shopNameText}>{shopName}</Text></View>

  // 星级、菜系、人均信息


  console.log('shopData', shopData);
  if (loading) return null
  const { shopInfo } = shopData;

  return (
    <View style={styles.container}>
      { shopInfo.banner.length ? ShopDishCarousel(shopInfo) : ShopLogoHeader(shopInfo) }
      { renderShopName(shopInfo.shopName) }
      { ShopBaseInfo(shopInfo) }
      { ShopTimeAddress(shopInfo) }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  shopName: {
    lineHeight: 40,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shopNameText: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

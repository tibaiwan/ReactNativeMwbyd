import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { getShopDetail } from '../api/service';
import { getDetailTransResult } from '../utils/util.formatQueueInfo';
import { ShopDishCarousel } from '../components/shopDetail/ShopDishCarousel';
import { ShopLogoHeader } from '../components/shopDetail/ShopLogoHeader';
import { ShopBaseInfo } from '../components/shopDetail/ShopBaseInfo';
import { ShopQueueBox } from '../components/shopDetail/ShopQueueBox';
import { ShopReserveBox } from '../components/shopDetail/ShopReserveBox';
import { ShopTimeAddress } from '../components/shopDetail/ShopTimeAddress';

export const ShopDetail = (props) => {
  const { route: { params: { shopId } }, navigation } = props;
  // console.log('ShopDetail shopId', shopId);
  // let shopId = 384368;

  const [loading, setLoading] = useState(true)
  const [shopData, setShopData] = useState({})

  useEffect(() => {
    getShopDetail({ shopId }).then(res => {
      setShopData(formatShopData(res));
      setLoading(false);
    });
  }, [shopId]);

  const formatShopData = (shopData) => {
    const { shopInfo, shopQueueInfo, buyNumDetail } = shopData;
    shopData.queueStateTrans = getDetailTransResult(shopQueueInfo, buyNumDetail)
    return shopData;
  }

  // 店铺名称
  renderShopName = shopName => <View style={styles.shopName}><Text style={styles.shopNameText}>{shopName}</Text></View>

  if (loading) return null
  const { shopInfo, shopQueueInfo, queueStateTrans } = shopData;

  return (
    <ScrollView style={styles.container}>
      { shopInfo.banner.length ? ShopDishCarousel(shopInfo) : ShopLogoHeader(shopInfo) }
      { renderShopName(shopInfo.shopName) }
      { ShopBaseInfo(shopInfo) }
      { ShopTimeAddress(shopInfo) }
      { ShopQueueBox(shopInfo, shopQueueInfo, queueStateTrans) }
      { ShopReserveBox(shopInfo) }
    </ScrollView>
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

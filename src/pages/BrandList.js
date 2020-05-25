import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { getBrandList } from '../api/service';
import { ShopItem } from '../components/ShopItem';
import { ListLoadStatus } from '../components/ListLoadStatus';
import { LOCATION_INFO } from '../constants/storeKey';
import { getData } from '../utils/util.storage';

export const BrandList = (props) => {
  const { route: { params: { mShopId, mallId } }, navigation } = props;
  
  const locationInfo = getData(LOCATION_INFO);
  const [loading, setLoading] = useState(true);
  const [shops, setShops] = useState([]);
  const [pageInfo, setPageInfo] = useState({ page: 1, total: 20 });
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getBrandList({manageShopId: mShopId, mallId}).then(res => {
      const shopData = res.shops;
      const newShops = shops.concat(shopData);
      setShops(newShops);
      setPageInfo(pageInfo => ({ page: pageInfo.page + 1, total: res.total }));
    });
  }, [mShopId]);

  useEffect(() => {
    if (shops.length >= pageInfo.total) {
      setHasMore(false);
    }
  }, [pageInfo.page]);

  fetchShopList = () => {
    const params = { page: pageInfo.page, pageSize: 20, ...locationInfo };
    getBrandList(params).then(res => {
      const shopData = res.shops;
      const newShops = shops.concat(shopData);
      setShops(newShops);
      setPageInfo(pageInfo => ({ page: pageInfo.page + 1, total: res.total }));
    });
  }

  handleReacheEnd = () => {
    if (!hasMore) return;
    fetchShopList();
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item }) => <ShopItem shop={item} navigation={navigation}/>}
        keyExtractor={(shop, index) => String(index)}
        ListFooterComponent={<ListLoadStatus hasMore={hasMore}/>}
        onEndReached={handleReacheEnd}
        onEndReachedThreshold={0.1}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

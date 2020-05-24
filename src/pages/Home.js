import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Image, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { getHomepageBanner, getHotBrands, getShops } from '../api/service';
import { Banner } from '../components/Banner';
import { HotBrands } from '../components/HotBrands';
import { SubTitle } from '../components/SubTitle';
import { ShopItem } from '../components/ShopItem';
import { ListLoadStatus } from '../components/ListLoadStatus';
import { getCurrentPosition } from '../utils/util.location';
import { storeData } from '../utils/util.storage';
import { LOCATION_INFO } from '../constants/storeKey';
import { ShopDetail } from './ShopDetail';

const HomeStack = createStackNavigator();
let locationInfo = {};

function HomeScreen({ navigation }) {

  const subTitle = '附近的餐厅';
  
  const [loading, setLoading] = useState(true)
  const [pageInfo, setPageInfo] = useState({ page: 1, total: 20 })
  const [hasMore, setHasMore] = useState(true)
  const [banners, setBanners] = useState([])
  const [brands, setBrands] = useState([])
  const [shops, setShops] = useState([])

  useEffect(() => {
    Promise.all([getHomepageBanner(), getHotBrands()]).then(res => {
      // console.log('useEffect res', res);
      const [banners, brands] = res;
      setBanners(banners);
      setBrands(brands);
      setLoading(false);
    });
    // 获取实时定位，加载附近餐厅
    getCurrentPosition().then(location => {
      locationInfo = { latitude: location.latitude, longitude: location.longitude };
      fetchShopList();
      storeData(LOCATION_INFO, locationInfo);
    });
  }, []);

  useEffect(() => {
    if (shops.length >= pageInfo.total) {
      setHasMore(false);
    }
  }, [pageInfo.page]);

  fetchShopList = () => {
    const params = { page: pageInfo.page, pageSize: 20, ...locationInfo };
    // console.log('fetchShopList params', params);
    getShops(params).then(res => {
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

  renderListHeader = () => <>
    <Banner banners={banners}/>
    <HotBrands brands={brands}/>
    <SubTitle title={subTitle} />
  </>

  renderListFooter = () => <ListLoadStatus hasMore={hasMore}/>

  return (
    <SafeAreaView style={styles.container}>
      {
        loading
        ? <ActivityIndicator size="large" color="#0000ff" />
        : <FlatList
            ListHeaderComponent={renderListHeader}
            ListFooterComponent={renderListFooter}
            data={shops}
            renderItem={({ item }) => <ShopItem shop={item} navigation={navigation} />}
            keyExtractor={(shop, index) => String(index)}
            onEndReached={handleReacheEnd}
            onEndReachedThreshold={0.1}
          />
      }
    </SafeAreaView>
  );
}

function LogoTitle() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
      <Image
        style={{ width: 40, height: 40 }}
        source={require('../assets/images/mw_logo.png')}
        />
      <Text style={{marginLeft: 10}}>美味不用等</Text>
    </View>
  );
}

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="homepage">
      <HomeStack.Screen
        name="homepage"
        component={HomeScreen}
        options={{ headerTitle: props => <LogoTitle {...props} /> }}
      />
      <HomeStack.Screen
        name="shopdetail"
        component={ShopDetail}
        options={{ cardStyleInterpolator: forFade }}
      />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  scrollView: {
    backgroundColor: '#fff',
  },
});
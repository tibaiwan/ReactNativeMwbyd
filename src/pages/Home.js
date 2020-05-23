import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Image, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { getHomepageBanner, getHotBrands, getShops } from '../api/service';
import { Banner } from '../components/Banner';
import { HotBrands } from '../components/HotBrands';
import { ShopList } from '../components/ShopList';

const HomeStack = createStackNavigator();

function HomeScreen({ navigation }) {

  const [loading, setLoading] = useState(true)
  const [banners, setBanners] = useState([])
  const [brands, setBrands] = useState([])
  const [shops, setShops] = useState([])

  useEffect(() => {
    Promise.all([getHomepageBanner(), getHotBrands(), getShops({latitude: 31.22024, longitude: 121.42394})]).then(res => {
      console.log('useEffect res', res);
      const [banners, brands, shopData] = res;
      setBanners(banners);
      setBrands(brands);
      setShops(shopData.shops);
      setLoading(false);
    })
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {
        loading
        ? <ActivityIndicator size="large" color="#0000ff" />
        : <ScrollView style={styles.scrollView}>
            <Banner banners={banners}/>
            <HotBrands brands={brands}/>
            <ShopList shops={shops}/>
          </ScrollView>
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

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="首页"
        component={HomeScreen} 
        options={{ headerTitle: props => <LogoTitle {...props} /> }}
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
    // marginHorizontal: 20,
  },
});
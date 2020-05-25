import React from 'react';
import { TouchableWithoutFeedback, View, Text, ImageBackground } from 'react-native';
import { Stars } from './Stars';
import { formatDistance } from '../utils/util.distance';
import { styles } from './styles/StyleShopItem';
import { statusObj } from '../constants/queueStatus';
import { hotTagBase64 } from '../constants/hotTagImg';

// LOGO
const renderLogo = (logo) => <ImageBackground source={{ uri: logo}} style={styles.logo} imageStyle={styles.logoImageStyle} />

// 店铺名称
const renderShopName = (shopName) => {
  return (
    <View style={{...styles.shopName, ...styles.inline}}>
      <Text style={styles.shopNameText}>{shopName}</Text>
    </View>
  )
}

// 星级和价格
const renderStarAndPrice = (shop) => {
  return (
    <View style={styles.inline}>
      <View style={styles.marginR20}>
        <Stars avgReview={shop.avgReview}/>
      </View>
      <Text style={styles.greyText}>¥ {shop.avgPrice}/人</Text>
    </View>
  )
}

// 菜系和距离
const renderDishTypeAndDistance = (shop) => {
  return (
    <View style={styles.inline}>
      <Text style={{...styles.greyText, ...styles.marginR20}}>{shop.styleCooking}</Text>
      <Text style={styles.greyText}>{formatDistance(shop.distance)}</Text>
    </View>
  )
}

// 排队信息
const renderQueueItem = (shop) => {
  const { queueInfo: {status, total}, hotStatus } = shop;
  let leftInfo
  let rightInfo
  switch (status) {
    case 1:
      leftInfo = '当前排队状况'
      rightInfo = <Text style={styles.NoNeedQueue}>{statusObj[status]}</Text>
      break;
    case 0:
    case 4:
      leftInfo = statusObj[status]
      rightInfo = <View style={styles.deskWrap}><Text style={styles.descNum}>{total}</Text><Text style={styles.deskText}>桌</Text></View>
      break;
    case 2:
    case 3:
    case 5:
      leftInfo = statusObj[status]
      break;
    default:
      break;
  }
  return (
    <View style={{...styles.additionItem, ...styles.withBorderTop}}>
      <View style={{...styles.queueReserveFlag, ...styles.queueFlag}}><Text style={styles.flagText}>排队</Text></View>
      <View>
        <Text style={styles.queueReserveDesc}>{leftInfo}</Text>
      </View>
      {
        !!rightInfo &&
        <View style={styles.queueDetail}>{rightInfo}</View>
      }
      {
        [1,2,3,4].includes(hotStatus) && <ImageBackground source={{ uri: hotTagBase64[hotStatus]}} style={styles.hotTag} />
      }
    </View>
  )
}

// 预定信息
const renderReserveItem = (shop) => {
  return (
    <View style={styles.additionItem}>
      <View style={{...styles.queueReserveFlag, ...styles.reserveFlag}}><Text style={styles.flagText}>预约</Text></View>
      <View>
        <Text style={styles.queueReserveDesc}>餐厅支持在线预定</Text>
      </View>
    </View>
  )
}

export const ShopItem = ({ shop, navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('shopdetail', { shopId: shop.shopId })}>
      <View style={styles.container}>
        <View style={styles.left}>
          { renderLogo(shop.logo) }
        </View>
        <View style={styles.right}>
          { renderShopName(shop.shopName) }
          { renderStarAndPrice(shop) }
          { renderDishTypeAndDistance(shop) }
          { shop.judge.queue && renderQueueItem(shop) }
          { shop.judge.book &&renderReserveItem(shop) }
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

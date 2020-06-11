import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { colorNormalGray, colorPaleGray } from '../../config/color';

const imageV = 'https://m.mwfile.cn/mm1005/image/20190314/icon-queue-prefix.png';

export const ShopQueueBox = (shopInfo, shopQueueInfo, queueStateTrans) => {
console.log('queueStateTrans', queueStateTrans);
console.log('shopQueueInfo', shopQueueInfo);
  return (
    <View style={styles.container}>
      <View style={styles.subTitleWrap}>
        <Image style={styles.prevIcon} source={{uri: imageV}} />
        <Text style={styles.titleText}>排队取号</Text>
        <Text style={styles.additionText}>等待时间仅供参考</Text>
      </View>

      {
        queueStateTrans.showQueueInfo ?
        <View>
          {/* 排队列表 */}
          {
            queueStateTrans.showQueueList && shopQueueInfo.queueInfoList &&
            <View style={styles.queueListWrap}>
              {
                shopQueueInfo.queueInfoList.map((item, index) => {
                  return (
                    <View key={index} style={styles.listItem}>
                      <View style={styles.deskInfo}>
                        <View><Text>{item.deskName}</Text></View>
                        {
                          item.to ? <View><Text style={styles.fromTo}>{item.from}-{item.to}人</Text></View>
                          : <View><Text style={styles.fromTo}>{item.from}人以上</Text></View>
                        }
                      </View>
                      <View style={styles.queueInfo}>
                        <Text>排队</Text>
                        <View><Text style={{color: '#FF6D69', fontWeight: 'bold'}}>{item.waitCount}</Text></View>
                        <Text>桌</Text>
                      </View>

                      <View style={styles.waitInfo}>
                        <Text style={styles.lightGray}>{item.waitTime}</Text>
                      </View>
                    </View>
                  )
                })
              }
            </View>
          }
        </View>
        : <View style={styles.shopStatusBox}>
            <Text>{queueStateTrans.text}</Text>
          </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colorPaleGray,
    borderBottomWidth: 10,
  },
  subTitleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingLeft: 15,
    paddingRight: 15,
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#3C3C3C',
  },
  additionText: {
    marginLeft: 'auto',
    fontSize: 10,
    color: '#878787',
  },
  prevIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  shopStatusBox: {
    alignItems: 'center',
    height: 70,
    lineHeight: 16,
    paddingTop: 20,
    fontSize: 16,
    color: '#323232',
  },
  queueListWrap: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    padding: 5,
    borderWidth: 1,
    borderColor: '#FF6D69',
    backgroundColor: '#FFF7F6',
    borderRadius: 5,
  },
  listItem: {
    flexDirection: 'row',
    height: 60,
  },
  deskInfo: {
    flex: 1.2,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  queueInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#323232',
  },
  waitInfo: {
    flex: 1,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  lightGray: {
    color: '#969696',
  },
  fromTo: {
    flexDirection: 'row',
    fontSize: 10,
    color: '#888',
  }
});

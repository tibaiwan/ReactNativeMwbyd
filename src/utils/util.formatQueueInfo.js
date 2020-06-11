const getTransMap = (queueState) => {
  let transResult = null;
  switch (queueState) {
    // 正常取号
    case 0:
      transResult = {
        listpage: {
          leftText: '前方正在等待',
          rightText: ''
        },
        detailpage: {
          showQueueInfo: true,
          showQueueList: true,
          btnText: '立即取号',
          text: ''
        }
      };
      break;
      // 无需排队
    case 1:
      transResult = {
        listpage: {
          leftText: '当前排队状况',
          rightText: '无需排队'
        },
        detailpage: {
          showQueueInfo: false,
          showQueueList: false,
          btnText: '',
          text: '餐厅当前无需排队'
        }
      };
      break;

      // 未到取号时间
    case 2:
      transResult = {
        listpage: {
          leftText: '未到营业时间',
          rightText: ''
        },
        detailpage: {
          showQueueInfo: false,
          showQueueList: false,
          btnText: '',
          text: '餐厅未到营业时间'
        }
      };
      break;

      // 暂停排队
    case 3:
      transResult = {
        listpage: {
          leftText: '暂停取号',
          rightText: ''
        },
        detailpage: {
          showQueueInfo: false,
          showQueueList: false,
          btnText: '',
          text: '餐厅当前暂停取号'
        }
      };
      break;
      // 需现场取号
    case 4:
      transResult = {
        listpage: {
          leftText: '现场取号',
          rightText: ''
        },
        detailpage: {
          showQueueInfo: true,
          showQueueList: true,
          btnText: '需现场取号',
          text: '现场取号'
        }
      };
      break;
      // 需现场取号(哥老官定制)
    case 5:
      transResult = {
        listpage: {
          leftText: '暂停手机取号',
          rightText: ''
        },
        detailpage: {
          showQueueInfo: true,
          showQueueList: false,
          btnText: '需现场取号',
          text: '现场取号'
        }
      };
      break;
  }

  return transResult;
}

export const getDetailTransResult = (shopQueueInfo, buyNumDetail) => {
  let result = {};

  const transMap = getTransMap(shopQueueInfo.shopQueueState);

  if (transMap) {
    result = transMap.detailpage;
  }

  if (shopQueueInfo.distance > shopQueueInfo.limit) {
    result.btnText = '距离太远';
  } else if (shopQueueInfo.shopQueueState === 0 && buyNumDetail.servicefee) {
    // 修改按钮文案，取号服务费
    result.btnText = `取号¥${buyNumDetail.buyNumberPrice / 100}`;
  }

  return result;
}

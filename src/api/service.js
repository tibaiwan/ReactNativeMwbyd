import { post } from '../utils/request';

// 首页 banner
export const getHomepageBanner = async params => {
  return await post('/basic/app/banner', params);
}

// 热门品牌
export const getHotBrands = async params => {
  return await post('/basic/app/hotbrands', params);
}

// 店铺列表
export const getShops = async params => {
  return await post('/basic/shops/baseQuery', params);
}

// 店铺详情
export const getShopDetail = async params => {
  return await post('/basic/shop/detail', params);
}

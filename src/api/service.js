import { post } from '../utils/request';

export const getHomepageBanner = async params => {
  return await post('/basic/app/banner', params)
}

export const getHotBrands = async params => {
  return await post('/basic/app/hotbrands', params)
}

export const getShops = async params => {
  return await post('/basic/shops/baseQuery', params)
}

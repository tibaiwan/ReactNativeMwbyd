import { baseUrl, cityId, fromw } from '../config/env';

export const post = (url, params = {}) => {
  const reqData = JSON.stringify(Object.assign({}, params, { cityId, fromw }));
  console.log('reqData:', reqData);
  return fetch(`${baseUrl}${url}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: reqData
  })
  .then(res => res.json())
  .then(json => {
    // console.log('post res data', json.data);
    return json.data;
  })
  .catch((error) => {
    console.error('error', error);
  });
}

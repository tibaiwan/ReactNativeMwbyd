import { baseUrl, cityId, fromw } from '../config/env';

export const post = (url, params = {}) => {
  return fetch(`${baseUrl}${url}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Object.assign({}, params, { cityId, fromw }))
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

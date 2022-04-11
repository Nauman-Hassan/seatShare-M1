import {endPoint} from '../../config/EndPoint';
import {HOME_ADS} from '../TypeConstants';

export const HomeAdsAction = () => async dispatch => {

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch(`${endPoint}/user/allAds`, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log('All ads res=>', JSON.parse(result));
      if (JSON.parse(result).status === 'success') {
        console.log('dispatch is run');
        dispatch({
          type: HOME_ADS,
          payload: JSON.parse(result),
        });
      } else {
        alert(JSON.parse(result).message);
      }
    })
    .catch(error => console.log('error', error));
};

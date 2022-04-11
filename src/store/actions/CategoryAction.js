import axios from 'axios';
import {endPoint} from '../../config/EndPoint';
import {USER_LOGIN} from '../TypeConstants';

export const CategoryAction = (data) => async dispatch => {
  console.log('data from catego', data);

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    vehicleType: data,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };


  fetch(`${endPoint}/user/adsCategories`, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log('catego res=>', JSON.parse(result));
      if (JSON.parse(result).status === 'success') {
        console.log('dispatch is run');
        // dispatch({
        //   type: USER_LOGIN,
        //   payload: JSON.parse(result),
        // });
      } else {
        alert(JSON.parse(result).message);
      }
    })
    .catch(error => console.log('error', error));
};

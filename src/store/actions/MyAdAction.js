
import {endPoint} from '../../config/EndPoint';
import {USER_OWN_AD} from '../TypeConstants';

export const MyAdAction = (id) => async dispatch => {
console.log("id in my ad", id);
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

var raw = JSON.stringify({
  id,
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
};

fetch(`${endPoint}/user/userAllAds`, requestOptions)
  .then(response => response.text())
  .then(result => {
    console.log('My ad res=>', JSON.parse(result));
    if (JSON.parse(result).status === 'success') {
      console.log('dispatch is run');
      dispatch({
        type: USER_OWN_AD,
        payload: JSON.parse(result).data,
      });
    } else {
      alert(JSON.parse(result).message);
    }
  })
  .catch(error => console.log('error', error));

 
};



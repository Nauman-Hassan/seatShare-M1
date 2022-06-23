import axios from 'axios';
import {endPoint} from '../../config/EndPoint';
import {WISHLIST_ADS} from '../TypeConstants';
import {Alert} from 'react-native';

export const GetUserWishlistAction = (id) => async dispatch => {
    console.log("id in wishlist", id);
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

var raw = JSON.stringify({
  heartUserId: id,
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
};

  fetch(
    // `${endPoint}/user/userWishlist`,
    "https://seatshare-server.herokuapp.com/user/getAllWishlist",
    requestOptions,
  )
    .then(response => response.text())
    .then(result => {
      console.log('wishlist res in action ', JSON.parse(result));
      if (JSON.parse(result).status === 'success') {
        console.log('dispatch is run');
        dispatch({
          type: WISHLIST_ADS,
          payload: JSON.parse(result),
        });
      } else {
        alert(JSON.parse(result).message);
      }
    })
    .catch(error => {
      console.log('error', error);
      Alert.alert('⚠️', 'Something went wrong ');
    });
};

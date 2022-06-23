import axios from 'axios';
import {endPoint} from '../../config/EndPoint';
import {USER_LOGIN} from '../TypeConstants';
import { HomeAdsAction } from './HomeAction';
// import {useDispatch, useSelector} from 'react-redux';
import {Alert, Linking} from 'react-native';


export const LoginAction = (email, password, setLoad) => async dispatch => {
  // const dispatch = useDispatch();
  // dispatch(HomeAdsAction());
  console.log('login act', email, 'pass=>', password);



  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    email,
    password,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
dispatch({
  type: 'LOGIN_LOADER',
  payload: true,
});
  fetch(`${endPoint}/auth/signin `, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log('signin res=>', JSON.parse(result));
      dispatch({
        type: 'LOGIN_LOADER',
        payload: false,
      });
      if (JSON.parse(result).message === 'No User Is Registered With This E-mail!'){
        Alert.alert(
            '⚠️',
            // 'Your Free Trail End',
            `No User Is Registered With This E-mail!`,)
      }
      if (JSON.parse(result).message === 'User Password is Incorrect!') {
        Alert.alert(
          '⚠️',
          // 'Your Free Trail End',
          `User Password is Incorrect!`,
        );
      }
        if (JSON.parse(result).data.userStatus === 'Free Trail End') {
          console.log('Your trail is end ---');

          Alert.alert(
            '⚠️',
            // 'Your Free Trail End',
            `Your Free Trail Has Been Ended. Again Start Your Trail `,
          );

          return;
        }
      if (JSON.parse(result).status === 'success') {
        console.log('dispatch is run');
        dispatch({
          type: USER_LOGIN,
          payload: JSON.parse(result),
        });
        // dispatch(HomeAdsAction())

      } else {
        Alert.alert('⚠️', JSON.parse(result).message);
      }
      
    })
    .catch(error => {
      console.log('error', error);
      Alert.alert('⚠️', JSON.parse(result).message);
      dispatch({
        type: 'LOGIN_LOADER',
        payload: false,
      });
    });
  
};

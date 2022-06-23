import axios from 'axios';
import {endPoint} from '../../config/EndPoint';
import {USER_LOGIN} from '../TypeConstants';
import { LoginAction } from './LoginAction';

export const SignUpAction =
  (name, email, mobile, password, confirmPassword, setSignupLoading) =>
  async dispatch => {
    console.log('Signup act', name, email, mobile, password, confirmPassword);

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
      name: name,
      email: email,
      mobile: mobile,
      password: password,
      confirmPassword: confirmPassword,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    setSignupLoading(true);
    fetch(`${endPoint}/auth/signup`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log('signup res=>', JSON.parse(result));
        
        setSignupLoading(false);
        console.log("---->>");
        dispatch(LoginAction(email.toLowerCase(), password));
        console.log("---->>");
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

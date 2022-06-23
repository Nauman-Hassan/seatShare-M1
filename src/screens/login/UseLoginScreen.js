import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { LoginAction } from '../../store/actions/LoginAction';
import { Alert} from 'react-native';

export function UseLoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = React.useState(false);

//   const LoginLoader = useSelector(state => state.LoaderReducer.isLoginLoader);


// console.log(" state from loader=>", LoginLoader)
  const dispatch = useDispatch();

  const fun=(mirza)=>{
  console.log("inner fiun ", mirza);
  setLoad(mirza);
  console.log("inner fiun load ", load);
}


  const ctaLogin = () => {
    
    console.log('=>>', email, '=>>', password);
     if (email === '' || password === '') {
      Alert.alert('⚠️', 'Please Fill All Fields!');
       return;
     }

    dispatch(LoginAction(email.toLowerCase(), password, fun));
    setEmail('');
    setPassword('');
    // dispatch({
    //   type: 'LOGIN_LOADER',
    //   payload: false,
    // });
  };

  return {email, setEmail, password, setPassword, ctaLogin };
}

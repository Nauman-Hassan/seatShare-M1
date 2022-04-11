import {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { LoginAction } from '../../store/actions/LoginAction';
import { Alert} from 'react-native';

export function UseLoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const [loginLoading, setLoginLoading] = useState(false);

  const dispatch = useDispatch();
  const ctaLogin = () => {
    console.log('=>>', email, '=>>', password);
     if (email === '' || password === '') {
      Alert.alert('⚠️', 'Please Fill All Fields!');
       return;
     }

    dispatch(LoginAction(email.toLowerCase(), password));
    setEmail('');
    setPassword('');
  };

  return [email, setEmail, password, setPassword, ctaLogin];
}

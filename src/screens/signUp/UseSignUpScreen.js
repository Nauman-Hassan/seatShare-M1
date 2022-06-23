import {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {SignUpAction} from '../../store/actions/SignUpAction';

export function UseSignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
    const [signupLoading, setSignupLoading] = useState(false);

  const dispatch = useDispatch();
  const ctaSignup = () => {
    console.log('=>>', name, '=>>', password, '=>>', email, '=>>', mobile);
 if (
   email === '' ||
   password === '' ||
   mobile === '' ||
   name === '' ||
   confirmPassword === ''
 ) {
   alert('Please Fill All Fields!');
   return;
 }
 if(password !== confirmPassword){
   alert('Password does not match!');
   return
 }
    dispatch(
      SignUpAction(
        name,
        email.toLowerCase(),
        mobile,
        password,
        confirmPassword,
        setSignupLoading,
      ),
    );

    setName('')
    setEmail('')
    setMobile('')
    setPassword('')
    setConfirmPassword('')
  };

  return [
    name,
    setName,
    email,
    setEmail,
    mobile,
    setMobile,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    ctaSignup,
    signupLoading,
  ];
}

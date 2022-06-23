import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Linking,
} from 'react-native';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';


import LoginScreenStyle from './LoginScreenStyle';

import {Stack, TextInput, Button} from '@react-native-material/core';
import { UseLoginScreen } from './UseLoginScreen';

function LoginScreen  () {
  const {email, setEmail, password, setPassword, ctaLogin, myLoad} =
    UseLoginScreen();
      const LoginLoader = useSelector(
        state => state.LoaderReducer.isLoginLoader,
      );
      

      console.log(' state from loader=> in com', LoginLoader);
      

  return (
    <>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{width: '100%'}}>
          <View style={LoginScreenStyle.ImageView}>
            <Image
              source={require('../../assets/photo/user.png')}
              style={LoginScreenStyle.userlogo}
            />
            <Text style={LoginScreenStyle.loginText}>Login Your Account</Text>

            <TextInput
              placeholder="Your Email"
              variant="outlined"
              style={LoginScreenStyle.userinp}
              placeholderTextColor={'#29AB87'}
              color={'#29AB87'}
              inputStyle={{color: '#29AB87'}}
              onChangeText={e => {
                setEmail(e);
              }}
              defaultValue={email}
            />
            <TextInput
              // label="Your Password"
              placeholder="Your Password"
              variant="outlined"
              secureTextEntry={true}
              style={LoginScreenStyle.userinp}
              placeholderTextColor={'#29AB87'}
              color={'#29AB87'}
              inputStyle={{color: '#29AB87'}}
              onChangeText={e => {
                setPassword(e);
              }}
              defaultValue={password}
            />
            <Button
              uppercase={false}
              variant="text"
              title="Do You Want To Start Trail?"
              color="#29AB87"
              onPress={() =>
                Linking.openURL('https://seatshare-admin.web.app/')
              }
            />

            {LoginLoader ? (
              <ActivityIndicator
                size="large"
                color="#29AB87"
                animating={true}
                style={{paddingTop: 30}}
              />
            ) : (
              <>
                <Button
                  title="Login"
                  style={LoginScreenStyle.loginBtn}
                  uppercase={true}
                  onPress={ctaLogin}
                />
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;

import React, {Component} from 'react';
import {Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
import {useState} from 'react';

import LoginScreenStyle from './LoginScreenStyle';

import {Stack, TextInput, Button} from '@react-native-material/core';
import { UseLoginScreen } from './UseLoginScreen';

function LoginScreen  () {
  const [email, setEmail, password, setPassword, ctaLogin] = UseLoginScreen()
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
              title="Forgot Password?"
              color="#29AB87"
            />

            <Button
              title="Login"
              style={LoginScreenStyle.loginBtn}
              uppercase={true}
              onPress={ctaLogin}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;

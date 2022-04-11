import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import {useState} from 'react';

import SignUpScreenStyle from './SignUpScreenStyle';

import {Stack, TextInput, Button} from '@react-native-material/core';
import { UseSignUpScreen } from './UseSignUpScreen';

const SignUpScreen = () => {
  const [
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
  ] = UseSignUpScreen();
  return (
    <>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{width: '100%'}}>
          <View style={SignUpScreenStyle.ImageView}>
            <Image
              source={require('../../assets/photo/user.png')}
              style={SignUpScreenStyle.userlogo}
            />
            <Text style={SignUpScreenStyle.SignUpText}>
              SignUp Your Account
            </Text>

            <TextInput
              placeholder="Your Name"
              variant="outlined"
              placeholderTextColor={'#29AB87'}
              style={SignUpScreenStyle.userinp}
              color={'#29AB87'}
              inputStyle={{color: '#29AB87'}}
              onChangeText={e => {
                setName(e);
              }}
              defaultValue={name}
            />
            <TextInput
              placeholder="Your Email"
              keyboardType="email-address"
              variant="outlined"
              placeholderTextColor={'#29AB87'}
              style={SignUpScreenStyle.userinp}
              color={'#29AB87'}
              inputStyle={{color: '#29AB87'}}
              onChangeText={e => {
                setEmail(e);
              }}
              defaultValue={email}
            />
            <TextInput
              placeholder="Your mobile"
              variant="outlined"
              placeholderTextColor={'#29AB87'}
              type="number"
              keyboardType="numeric"
              maxLength={11}
              style={SignUpScreenStyle.userinp}
              color={'#29AB87'}
              inputStyle={{color: '#29AB87'}}
              onChangeText={e => {
                setMobile(e);
              }}
              defaultValue={mobile}
            />
            <TextInput
              placeholder="Your Password"
              variant="outlined"
              placeholderTextColor={'#29AB87'}
              style={SignUpScreenStyle.userinp}
              color={'#29AB87'}
              inputStyle={{color: '#29AB87'}}
              onChangeText={e => {
                setPassword(e);
              }}
              defaultValue={password}
            />
            <TextInput
              placeholder="Confirm Password"
              variant="outlined"
              placeholderTextColor={'#29AB87'}
              style={SignUpScreenStyle.userinp}
              color={'#29AB87'}
              inputStyle={{color: '#29AB87'}}
              onChangeText={e => {
                setConfirmPassword(e);
              }}
              defaultValue={confirmPassword}
            />

            <Button
              title="SignUp"
              style={SignUpScreenStyle.SignUpBtn}
              uppercase={true}
              onPress={ctaSignup}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default SignUpScreen;

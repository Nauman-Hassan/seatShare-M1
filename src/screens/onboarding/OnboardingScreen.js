// import React from 'react'
// import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Gaming from '../assets/gaming.svg';

// const OnboardingScreen = ({navigation}) => {
//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//       }}>
//       <View style={{marginTop: 20}}>
//         <Text
//           style={{
//             fontFamily: 'Inter-Bold',
//             fontWeight: 'bold',
//             fontSize: 30,
//             color: '#20315f',
//           }}>
//           GAMEON
//         </Text>
//       </View>
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Gaming
//           width={300}
//           height={300}
//           style={{transform: [{rotate: '-15deg'}]}}
//         />
//       </View>
//       <TouchableOpacity
//         style={{
//           backgroundColor: '#AD40AF',
//           padding: 20,
//           width: '90%',
//           borderRadius: 10,
//           marginBottom: 50,
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//         }}
//         onPress={() => navigation.navigate('Login')}>
//         <Text
//           style={{
//             color: 'white',
//             fontSize: 18,
//             textAlign: 'center',
//             fontWeight: 'bold',
//             fontFamily: 'Roboto-MediumItalic',
//           }}>
//           Let's Begin
//         </Text>
//         <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default OnboardingScreen;


import React, {Component} from 'react';
import {Text, View, Platform, Image, TouchableOpacity} from 'react-native';
// import Loader from '../../commonComponents/Loader';
import { Button} from '@react-native-material/core';
import OnboardingScreenStyle from './OnboardingScreenStyle';

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={OnboardingScreenStyle.container}>
      <View style={OnboardingScreenStyle.small}>
        <Image
          source={require('../../assets/photo/logo.png')}
          style={OnboardingScreenStyle.smallImage}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#29AB87',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 10,
          marginTop: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('SignUp')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Roboto-MediumItalic',
          }}>
          Get Started
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>

      <Button
        onPress={() => navigation.navigate('Login')}
        uppercase={false}
        variant="text"
        title="Already have an account ?"
        color="#29AB87"
        style={{
          
          marginBottom: 20,
          marginTop: 20,
          
        }}
      />
    </View>
  );
};
export default OnboardingScreen;

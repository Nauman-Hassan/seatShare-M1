import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import LoginScreen from '../screens/login/LoginScreen';
import SignUpScreen from '../screens/signUp/SignUpScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#29AB87',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#29AB87',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

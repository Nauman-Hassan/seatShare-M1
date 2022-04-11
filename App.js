import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import {Provider} from 'react-redux';
import  store from "./src/config/Store"
import {useSelector} from 'react-redux';


function App() {
   const authState = useSelector(state => state.LoginReducer.isLogIn);
   console.log("authstate--->", authState);
  // const authState = false
  return (
    
      <Provider store={store}>
        <NavigationContainer>
          {authState ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      </Provider>
    
  );
}

export default App;
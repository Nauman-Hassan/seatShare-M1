import React from 'react';


import App from "./App"
import {Provider} from 'react-redux';
import store from './src/config/Store';
import {useSelector} from 'react-redux';
import ToastMain from './src/components/toast/ToastMain';
function AppNav() {
 
  return (
    <Provider store={store}>
  {/* <ToastMain /> */}
      <App />
    </Provider>
  );
}

export default AppNav;

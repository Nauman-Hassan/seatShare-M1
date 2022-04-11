import {combineReducers} from 'redux';

import LoginReducer from './reducers/LoginReducer';
import MyAdsReducer from './reducers/MyAdsReducer';
import HomeAdsReducer from './reducers/HomeAdsReducer';

const RootReducer = combineReducers({
  LoginReducer,
  MyAdsReducer,
  HomeAdsReducer,
});
export default RootReducer;

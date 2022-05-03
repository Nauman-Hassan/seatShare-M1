import {combineReducers} from 'redux';

import LoginReducer from './reducers/LoginReducer';
import MyAdsReducer from './reducers/MyAdsReducer';
import HomeAdsReducer from './reducers/HomeAdsReducer';
import WishlistReducer from "./reducers/WishlistReducer"

const RootReducer = combineReducers({
  LoginReducer,
  MyAdsReducer,
  HomeAdsReducer,
  WishlistReducer,
});
export default RootReducer;

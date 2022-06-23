import {combineReducers} from 'redux';

import LoginReducer from './reducers/LoginReducer';
import MyAdsReducer from './reducers/MyAdsReducer';
import HomeAdsReducer from './reducers/HomeAdsReducer';
import WishlistReducer from "./reducers/WishlistReducer"
import LoaderReducer from './reducers/LoaderReducer';


const RootReducer = combineReducers({
  LoginReducer,
  MyAdsReducer,
  HomeAdsReducer,
  WishlistReducer,
  LoaderReducer,
});
export default RootReducer;

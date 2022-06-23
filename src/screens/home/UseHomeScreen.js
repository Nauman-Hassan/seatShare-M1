
import {useDispatch, useSelector} from 'react-redux';
import React, {useState, useEffect} from 'react';
import { HomeAdsAction } from '../../store/actions/HomeAction';
import { GetUserWishlistAction } from '../../store/actions/GetUserWishlistAction';

export function UseHomeScreen() {
const dispatch = useDispatch();
const activeUser = useSelector(state => state.LoginReducer.activeUser.data);
console.log('activeUser.id in home for wishlist', activeUser.id);
   useEffect(() => {
     dispatch(GetUserWishlistAction(activeUser.id));
   }, []);
  const homeAds = useSelector(state => state.HomeAdsReducer.homeAllAds.data);
  console.log("active user in home for", homeAds.id);

  return [homeAds];
  
}

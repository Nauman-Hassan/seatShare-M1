
import {useDispatch, useSelector} from 'react-redux';
import React, {useState, useEffect} from 'react';
import { HomeAdsAction } from '../../store/actions/HomeAction';

export function UseHomeScreen() {
const dispatch = useDispatch();
  //  useEffect(() => {
  //    dispatch(HomeAdsAction());
  //  }, []);
  const homeAds = useSelector(state => state.HomeAdsReducer.homeAllAds.data);
  console.log("active user in home for", homeAds.id);

  return [homeAds];
  
}

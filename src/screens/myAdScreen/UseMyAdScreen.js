import {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { MyAdAction } from '../../store/actions/MyAdAction';


export function UseMyAdScreen(){

      const dispatch = useDispatch();
    const activeUser = useSelector(state => state.LoginReducer.activeUser.data);
    const ctaMyAd = ()=>{
        console.log('activeUser in App id--->', activeUser.id);
        dispatch(MyAdAction(activeUser.id));

    }
    const myAds = useSelector(state => state.MyAdsReducer.userOwnAds);
    console.log("my own ads", myAds);
    return [ctaMyAd, myAds];
} 
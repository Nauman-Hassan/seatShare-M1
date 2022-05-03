import {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { GetUserWishlistAction } from '../../store/actions/GetUserWishlistAction';

export function UseFavouriteScreen() {
  const dispatch = useDispatch();
  const activeUser = useSelector(state => state.LoginReducer.activeUser.data);
 
  const ctaMyWishlist = () => {
    console.log('activeUser in my wishlist--->', activeUser.id);
    dispatch(GetUserWishlistAction(activeUser.id));
  };
    const myAds = useSelector(state => state.WishlistReducer.wishlistAds.data);
    console.log('my own ads in use outer', myAds);
  return [ctaMyWishlist, myAds];
}

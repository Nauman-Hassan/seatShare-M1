import {WISHLIST_ADS} from '../TypeConstants';

const initialState = {
  wishlistAds: [],
};

function WishlistReducer(state = initialState, action) {
  switch (action.type) {
    case WISHLIST_ADS: {
      // let evalData = eval(action.type);
      console.log('reducer Wishlist ads', action.payload);
      return {
        ...state,
        wishlistAds: action.payload,
      };
    }

    default:
      return state;
  }
}
export default WishlistReducer;

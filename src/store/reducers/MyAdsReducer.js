import {USER_OWN_AD} from '../TypeConstants';

const initialState = {
  userOwnAds:[]
};

function MyAdsReducer(state = initialState, action) {
  switch (action.type) {
    case USER_OWN_AD: {
      // let evalData = eval(action.type);
      console.log('reducer my ads', action.payload);
        return {
          ...state,
          userOwnAds: action.payload,
        };
    }
    

    default:
      return state;
  }
}
export default MyAdsReducer;

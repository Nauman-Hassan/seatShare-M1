import {HOME_ADS} from '../TypeConstants';

const initialState = {
  homeAllAds: [],
};

function HomeAdsReducer(state = initialState, action) {
  switch (action.type) {
    case HOME_ADS: {
      // let evalData = eval(action.type);
      console.log('reducer Home ads', action.payload);
      return {
        ...state,
        homeAllAds: action.payload,
      };
    }

    default:
      return state;
  }
}
export default HomeAdsReducer;

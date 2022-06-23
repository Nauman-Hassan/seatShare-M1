

const initialState = {
  isLoginLoader: false,
  
};

function LoaderReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_LOADER": {
      console.log('reducer login', action.payload);
      return {
        ...state,
        isLoginLoader: action.payload,
      };
    }
    
    default:
      return state;
  }
}
export default LoaderReducer;

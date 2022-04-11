import {USER_LOGIN, USER_LOGOUT} from '../TypeConstants';

const initialState = {
  isLogIn: false,
  activeUser: null,
};

function LoginReducer(state = initialState, action) {
  
  switch (action.type) {
    case USER_LOGIN: {
      // let evalData = eval(action.type);
      console.log('reducer login', action.payload);
      return {
        ...state,
        isLogIn: true,
        activeUser: action.payload,
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        isLogIn: false,
      };
    }

    default:
      return state;
  }
}
export default LoginReducer;

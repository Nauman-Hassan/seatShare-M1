
import {USER_LOGOUT} from '../TypeConstants';

export const LogoutAction = () => async dispatch => {
  dispatch({
    type: USER_LOGOUT,
    payload: null,
  });
};

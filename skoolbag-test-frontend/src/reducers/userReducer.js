import {

  REG_USER,
  REG_USER_SUCCESS,
  REG_USER_FAIL,

  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  
} from "../actions/types";

const INITIAL_STATE = {

  registered: false,
  isLoad: "",

  login: false,
  is_login: false,

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REG_USER:
      return { ...state, registered: false, isLoad: true };
    case REG_USER_SUCCESS:
      return { ...state, registered: true, isLoad: false };
    case REG_USER_FAIL:
      return { ...state, registered: false, isLoad: false, ...INITIAL_STATE };

    case LOGIN_USER:
      return { ...state, login: false, is_login: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, login: true, is_login: false };
    case LOGIN_USER_FAIL:
      return { ...state, login: false, is_login: false, ...INITIAL_STATE };

    default:
      return state;
  }
};

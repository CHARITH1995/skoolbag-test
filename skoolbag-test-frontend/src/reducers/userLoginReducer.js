import {

    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    
  } from "../actions/types";
  
  const INITIAL_STATE = {
  
    login: false,
    is_login: false,
  
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
  
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
  
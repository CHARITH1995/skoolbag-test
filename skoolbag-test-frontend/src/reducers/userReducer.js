import {

  REG_USER,
  REG_USER_SUCCESS,
  REG_USER_FAIL,

  
} from "../actions/types";

const INITIAL_STATE = {


  register: false,
  is_register: false,

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case REG_USER:
      return { ...state, register: false, is_register: true };
    case REG_USER_SUCCESS:
      return { ...state, register: true, is_register: false };
    case REG_USER_FAIL:
      return { ...state, register: false, is_register: false, ...INITIAL_STATE };

    default:
      return state;
  }
};

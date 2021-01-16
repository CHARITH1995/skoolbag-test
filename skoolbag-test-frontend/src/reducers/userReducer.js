import {
    REG_CUSTOMER , REG_CUSTOMER_SUCCESS , REG_CUSTOMER_FAIL
  } from '../actions/types';
  
  const INITIAL_STATE = {
    registered:false,
    isLoad: ""
  }
   
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case REG_CUSTOMER:
        return { ...state, registered:false, isLoad: true };
      case REG_CUSTOMER_SUCCESS:
        return { ...state, registered: true, isLoad: false };
      case REG_CUSTOMER_FAIL:
        return { ...state, registered: false, isLoad: false, ...INITIAL_STATE };
  
      default:
        return state;
    }
  }
import {GET_SCHOOL,GET_SCHOOL_SUCCESS,GET_SCHOOL_FAIL } from "../actions/types";
  
  const INITIAL_STATE = {
  
    schools:[],
    is_loading: false,
  
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
  
      case GET_SCHOOL:
        return { ...state, schools:[], is_loading: true };
      case GET_SCHOOL_SUCCESS:
        return { ...state, schools:action.schoolResponse, is_loading: false };
      case GET_SCHOOL_FAIL:
        return { ...state, schools:[], is_loading: false, ...INITIAL_STATE };
  
      default:
        return state;
    }
  };
  
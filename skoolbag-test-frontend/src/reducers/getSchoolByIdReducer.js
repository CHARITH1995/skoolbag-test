import {GET_SCHOOL_BY_ID , GET_SCHOOL_BY_ID_SUCCESS ,GET_SCHOOL_BY_ID_FAIL } from "../actions/types";
  
  const INITIAL_STATE = {
  
    school:[],
    is_loading: false,
  
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
  
      case GET_SCHOOL_BY_ID:
        return { ...state, school:[], is_loading: true };
      case GET_SCHOOL_BY_ID_SUCCESS:
        return { ...state, school:action.schoolResponse, is_loading: false };
      case GET_SCHOOL_BY_ID_FAIL:
        return { ...state, school:[], is_loading: false, ...INITIAL_STATE };
  
      default:
        return state;
    }
  };
  
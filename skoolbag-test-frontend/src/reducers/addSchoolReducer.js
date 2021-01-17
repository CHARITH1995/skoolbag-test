import {ADD_SCHOOL ,ADD_SCHOOL_FAIL ,ADD_SCHOOL_SUCCESS } from "../actions/types";
  
  const INITIAL_STATE = {
  
    addSchool: false,
    is_adding: false,
  
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
  
      case ADD_SCHOOL:
        return { ...state, addSchool: false, is_adding: true };
      case ADD_SCHOOL_SUCCESS:
        return { ...state, addSchool: true, is_adding: false };
      case ADD_SCHOOL_FAIL:
        return { ...state, addSchool: false, is_adding: false, ...INITIAL_STATE };
  
      default:
        return state;
    }
  };
  
import {GET_RECENTLY_ADDED_SCHOOL_SUCCESS , GET_RECENTLY_ADDED_SCHOOL_FAIL , GET_RECENTLY_ADDED_SCHOOL} from "../actions/types";
  
  const INITIAL_STATE = {
  
    recentSchools:[],
    is_loading: false,
  
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
  
      case GET_RECENTLY_ADDED_SCHOOL:
        return { ...state, recentSchools:[], is_loading: true };
      case GET_RECENTLY_ADDED_SCHOOL_SUCCESS:
        return { ...state, recentSchools:action.recentSchools, is_loading: false };
      case GET_RECENTLY_ADDED_SCHOOL_FAIL:
        return { ...state, recentSchools:[], is_loading: false, ...INITIAL_STATE };
  
      default:
        return state;
    }
  };
  
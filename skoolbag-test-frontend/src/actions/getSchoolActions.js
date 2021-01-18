import { GET_SCHOOL , GET_SCHOOL_FAIL ,GET_SCHOOL_SUCCESS } from "./types";
import { SCHOOLS_GET } from "../config/url";
import API from "../config/api";
import * as URL from "../config/url";

export const getSchools = () => { 
    return async (dispatch) => {
        dispatch({ type: GET_SCHOOL }); 
        try {
            const rawResponse = await API.get(URL.SCHOOLS_GET,null,false);
            const responseData = await API.processResponse(rawResponse);
            
            if (rawResponse.status == 200) {
                getSchoolsSuccess(dispatch, responseData);
            } else {
                getSchoolsFailed(dispatch);
            }
          } catch (err) {
            getSchoolsFailed(dispatch);
          }
    }
  }

const getSchoolsSuccess = (dispatch,response) => {
  dispatch({
    type: GET_SCHOOL_SUCCESS,
    schoolResponse:response
  });
};

const getSchoolsFailed = (dispatch, exception) => {
  dispatch({
    type: GET_SCHOOL_FAIL,
  });
};

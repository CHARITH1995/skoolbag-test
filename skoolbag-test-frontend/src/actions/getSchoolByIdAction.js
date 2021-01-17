import { GET_SCHOOL_BY_ID , GET_SCHOOL_BY_ID_SUCCESS ,GET_SCHOOL_BY_ID_FAIL} from "./types";
import { SCHOOL_GET_BY_ID } from "../config/url";
import API from "../config/api";
import * as URL from "../config/url";

export const getASchoolById = (id) => { 
    return async (dispatch) => {
        dispatch({ type: GET_SCHOOL_BY_ID }); 

        const url = URL.SCHOOL_GET_BY_ID + id
        try {
            const rawResponse = await API.get(url, false);
            const responseData = await API.processResponse(rawResponse);
            
            if (rawResponse.status == 200) {
                getASchoolByIdSuccess(dispatch, responseData);
            } else {
                getASchoolByIdFailed(dispatch);
            }
          } catch (err) {
            getASchoolByIdFailed(dispatch);
          }
    }
  }

const getASchoolByIdSuccess = (dispatch,response) => {
  dispatch({
    type: GET_SCHOOL_BY_ID_SUCCESS,
    schoolResponse:response
  });
};

const getASchoolByIdFailed = (dispatch, exception) => {
  dispatch({
    type: GET_SCHOOL_BY_ID_FAIL,
  });
};

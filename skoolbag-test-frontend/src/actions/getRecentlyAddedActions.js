import {GET_RECENTLY_ADDED_SCHOOL_SUCCESS , GET_RECENTLY_ADDED_SCHOOL_FAIL , GET_RECENTLY_ADDED_SCHOOL} from "./types";
import { SCHOOL_GET_RECENT } from "../config/url";
import API from "../config/api";
import * as URL from "../config/url";

export const getRecentlyAddedSchools = () => { 
    return async (dispatch) => {
        dispatch({ type: GET_RECENTLY_ADDED_SCHOOL }); 
        try {
            const rawResponse = await API.get(URL.SCHOOL_GET_RECENT, false);
            const responseData = await API.processResponse(rawResponse);
            if (rawResponse.status == 200) {
                getRecentlyAddedSchoolsSuccess(dispatch, responseData);
            } else {
                getRecentlyAddedSchoolsFailed(dispatch);
            }
          } catch (err) {
            getRecentlyAddedSchoolsFailed(dispatch);
          }
    }
  }

const getRecentlyAddedSchoolsSuccess = (dispatch,response) => {
  dispatch({
    type: GET_RECENTLY_ADDED_SCHOOL_SUCCESS,
    recentSchools:response
  });
};

const getRecentlyAddedSchoolsFailed = (dispatch, exception) => {
  dispatch({
    type: GET_RECENTLY_ADDED_SCHOOL_FAIL,
  });
};

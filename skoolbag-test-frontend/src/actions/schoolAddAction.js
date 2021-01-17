import { ADD_SCHOOL, ADD_SCHOOL_FAIL, ADD_SCHOOL_SUCCESS } from "./types";
import { SCHOOL_ADD } from "../config/url";
import API from "../config/api";
import * as URL from "../config/url";

export const schoolAdd = (
  schoolName,
  principalName,
  email,
  suburb,
  postalCode,
  state,
  street,
  studentCount
) => {
  return async (dispatch) => {
    dispatch({ type: ADD_SCHOOL });

    const school = {
      schoolName: schoolName,
      principalName: principalName,
      studentCount: studentCount,
      email: email,
      street: street,
      surburb: suburb,
      postalcode:postalCode,
      state: state,
    };
    try {
      const rawResponse = await API.post(URL.SCHOOL_ADD, school, false);
      if (rawResponse.status == 200) {
        schoolAddSuccess(dispatch);
      } else {
        schoolAddFailed(dispatch, rawResponse.statusText);
      }
    } catch (err) {
      schoolAddFailed(dispatch, err);
    }
  };
};

const schoolAddSuccess = (dispatch) => {
  dispatch({
    type: ADD_SCHOOL_SUCCESS,
  });
};

const schoolAddFailed = (dispatch, exception) => {
  dispatch({
    type: ADD_SCHOOL_FAIL,
  });
};

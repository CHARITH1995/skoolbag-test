import { REG_USER, REG_USER_SUCCESS, REG_USER_FAIL } from "./types";
import { USER_REGISTER, USER_LOGIN } from "../config/url";
import API from "../config/api";
import * as URL from "../config/url";

export const registerUser = (
  firstName,
  lastName,
  password,
  email,
  surburb,
  postalcode,
  state,
  street
) => {
  return async (dispatch) => {
    dispatch({ type: REG_USER });

    const user = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      street: street,
      surburb: surburb,
      postalcode: postalcode,
      state: state,
      password: password,
    };
    try {
      const response = await API.post(URL.USER_REGISTER, user, false);
      if (response.status == 200) {
        registerUserSuccess(dispatch);
      } else {
        registerUserFailed(dispatch, response.statusText);
      }
    } catch (err) {
      registerUserFailed(dispatch, err);
    }
  };
};

const registerUserSuccess = (dispatch) => {
  dispatch({
    type: REG_USER_SUCCESS,
  });
};

const registerUserFailed = (dispatch, exception) => {
  dispatch({
    type: REG_USER_FAIL,
  });
};



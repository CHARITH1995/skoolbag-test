import { LOGIN_USER ,LOGIN_USER_FAIL ,LOGIN_USER_SUCCESS} from "./types";
import { USER_REGISTER, USER_LOGIN } from "../config/url";
import API from "../config/api";
import * as URL from "../config/url";


export const userLogin = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_USER });

    const user = {
      password: password,
      email:email,
    };

    try {
      const rawResponse = await API.post(URL.USER_LOGIN, user, false);
      const response = await API.processResponse(rawResponse);
      
      if (rawResponse.status == 200) {
        loginUserSuccess(dispatch, response);
      } else {
        loginUserFailed(dispatch, rawResponse);
      }
    } catch (err) {
      loginUserFailed(dispatch);
    }
  };
};

const saveLogedUser = async (dispatch, responseData) => {
  try {
    loginUserSuccess(dispatch);
  } catch (error) {
    console.warn("AsyncStorage save error: " + error.message);
  }
};

const loginUserSuccess = (dispatch,response) => {
  console.log("success")
  dispatch({
    type: LOGIN_USER_SUCCESS,
  });
};

const loginUserFailed = (dispatch, exception) => {
  dispatch({
    type: LOGIN_USER_FAIL,
  });
};

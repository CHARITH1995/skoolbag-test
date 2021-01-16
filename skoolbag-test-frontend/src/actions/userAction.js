import { REG_CUSTOMER , REG_CUSTOMER_SUCCESS , REG_CUSTOMER_FAIL }  from './types';
import { CUSTOMER_REGISTER } from '../config/url';
import API from '../config/api';
import * as URL from '../config/url';

export const registerUser = ( firstName, lastName , password , email , surburb , postalcode , state , street ) => {
    return async (dispatch) => {

      dispatch({ type: REG_CUSTOMER });

      const user = {
        email:email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        street:street, 
        surburb:surburb,
        postalcode:postalcode,
        state:state,
        password:password
      };
      try {
        const response = await API.post(URL.CUSTOMER_REGISTER, user, false);
        if (response.status == 200) {
          registerUserSuccess(dispatch);
        }
        else {
          registerUserFailed(dispatch, response.statusText);
        }
      } catch (err) {
        registerUserFailed(dispatch, err);
      }
    }
  }
  
  const registerUserSuccess = (dispatch) => {
    dispatch({
      type: REG_CUSTOMER_SUCCESS
    });
  };
  
  const registerUserFailed = (dispatch, exception) => {
    
    dispatch({
      type: REG_CUSTOMER_FAIL
    })
  
  };
import { combineReducers } from 'redux';

import userReducer from './userReducer';
import userLoginReducer from './userLoginReducer';


const rootReducer = combineReducers({
    
    user:userReducer,
    userLogin:userLoginReducer
    
});

export default rootReducer;
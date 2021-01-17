import { combineReducers } from 'redux';

import userReducer from './userReducer';
import userLoginReducer from './userLoginReducer';
import addSchoolReducer from './addSchoolReducer';
import getSchoolsReducer from './getSchoolsReducer';
import getSchoolByIdReducer from './getSchoolByIdReducer';
import getRecentlyAddedReducer from './getRecentlyAddedReducer';


const rootReducer = combineReducers({
    
    user:userReducer,
    userLogin:userLoginReducer,
    addSchool:addSchoolReducer,
    getSchools:getSchoolsReducer,
    getSchoolById:getSchoolByIdReducer,
    getRecentlyAdded:getRecentlyAddedReducer,
    
});

export default rootReducer;
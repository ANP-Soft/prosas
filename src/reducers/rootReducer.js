import { combineReducers } from 'redux';
import { adminReducer } from './adminReducer';
import { authReducer } from './authReducer';

import { uiReducer } from './uiReducer';


export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    admin: adminReducer,
});
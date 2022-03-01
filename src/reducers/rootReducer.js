import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import { adminReducer } from './adminReducer';
import { categoryReducer } from './categoryReducer';
import { productReducer } from './productReducer';
import { userReducer } from './userReducer';


export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    admin: adminReducer,
    category: categoryReducer,
    product: productReducer,
    user: userReducer,

});
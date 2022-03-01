import { types } from '../types/types';

const initialState = {
    user: [],
    active: null,
};


export const userReducer = ( state = initialState, action ) => {
    switch( action.type ){

        case types.userAddNew:
            return { 
                ...state,
                user: [ 
                    ...state.user,
                    action.payload,
                ],
                active: null,
            }

        case types.userLoaded:
            return {
                ...state,
                user: [...action.payload]
            }
        
        case types.userDeleted:
            return {
                ...state,
                user: state.user.filter( user => (user.uid !== action.payload.uid) ),
                active: null,
            }

        case types.userEdited:
            return {
                ...state,
                user: state.user.map( user  => (user.uid === action.payload.uid) ? action.payload : user)
            }
        
        case types.userSetActive:
            return {
                ...state,
                active: action.payload,
            }

        case types.userRemoveActive:
            return {
                ...state,
                active: null,
            }
    
        default:
            return state;
    }
}
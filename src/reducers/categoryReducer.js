import { types } from '../types/types';

const initialState = {
    category : []
};

export const categoryReducer = ( state = initialState, action ) => {

    switch( action.type ){
        
        case types.categoryAddNew:
            return { 
                ...state,
                category: [ 
                    ...state.category,
                    action.payload,
                ]
            }
        
        case types.categoryLoaded:
            return {
                ...state,
                category: [...action.payload]
            }
        
        case types.categoryDeleted:
            return {
                ...state,
                category: state.category.filter( category => (category.catId !== action.payload.catId) )
            }
        
        default:
            return state;
    }
}
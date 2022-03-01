import { types } from '../types/types';

const initialState = {
    product: [],
    active: null,
};

export const productReducer = ( state = initialState, action ) => {
    switch( action.type ){

        case types.productAddNew:
            return { 
                ...state,
                product: [ 
                    ...state.product,
                    action.payload,
                ],
                active: null,
            }

        case types.productLoaded:
            return {
                ...state,
                product: [...action.payload]
            }
        
        case types.productDeleted:
            return {
                ...state,
                product: state.product.filter( product => (product.pid !== action.payload.pid) ),
                active: null,
            }

        case types.productEdited:
            return {
                ...state,
                product: state.product.map( product  => (product.pid === action.payload.pid) ? action.payload : product)
            }

        case types.productSetActive:
            return {
                ...state,
                active: action.payload,
            }

        case types.productRemoveActive:
            return {
                ...state,
                active: null,
            }
        
        default:
            return state;
    }
}
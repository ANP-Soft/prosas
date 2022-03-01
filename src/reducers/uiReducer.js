import { types } from "../types/types";

const initialState = {
    newModalOpen: false,
    editModalOpen: false,
};


export const uiReducer = (state = initialState, action ) => {
    switch( action.type ){
        case types.uiNewOpenModal:
            return {
                ...state,
                newModalOpen: true
            };
        
        case types.uiNewCloseModal:
            return {
                ...state,
                newModalOpen: false
            };
    
        case types.uiEditOpenModal:
            return {
                ...state,
                editModalOpen: true
            };
        
         case types.uiEditCloseModal:
            return {
                ...state,
                editModalOpen: false
            };
        default:
            return state;
    }
}

//  uiOpenModal: '[ui-event] Open Modal'
//  uiCloseModal: '[ui-event] Close Modal'
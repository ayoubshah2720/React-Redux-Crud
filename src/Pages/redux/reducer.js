import * as types from "./actionType";
const initialState = {
    products: [],
    product: {},
    loading: true,
}

const productsReducers = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
        
        case types.GET_SINGLE_PRODUCT:
            return {
                ...state,
                product: action.payload,
                loading: false,
            }

        case types.ADD_PRODUCT:
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
            
        case types.UPDATE_PRODUCT:
            return {
                ...state,
                products: action.payload,
                loading: false,
            }

        case types.DELETE_PRODUCT:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}

export default productsReducers;
import {START_PRICE, END_PRICE} from "../actions/types";

const initialState = {
    startPrice: undefined,
    endPrice: undefined
};

const priceFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_PRICE :
            return {
                ...state,
                startPrice: action.payload
            };
        case END_PRICE :
            return {
                ...state,
                endPrice: action.payload
            }
        default :
            return state;
    }
};

export default priceFilterReducer;
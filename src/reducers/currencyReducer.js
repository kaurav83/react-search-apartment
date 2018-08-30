import {SELECT_CURRENCY} from "../actions/types";
const initialState = "UAH"

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CURRENCY :
            return  action.currency;
        default : 
            return state;
    }
}

export default  currencyReducer;
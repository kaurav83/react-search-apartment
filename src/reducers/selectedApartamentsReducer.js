import {FILTER_APARTAMENT} from "../actions/types";
const initialState = "all";

const selectedApartamentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_APARTAMENT :
            return action.selectedApartments;
        default: 
            return state;
    }
}

export default selectedApartamentsReducer;
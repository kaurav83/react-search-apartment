import {ADD_RAITING_FILTER, REMOVE_RAITING_FILTER} from '../actions/types';
const initialState = {totalRaitingFilter: []};

const visibilityFilterRaiting = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RAITING_FILTER :
            return {
                ...state, totalRaitingFilter: [...state.totalRaitingFilter, action.payload]
            };
        case REMOVE_RAITING_FILTER :
            const newTotalRaitingFilter = state.totalRaitingFilter.filter((item) => item !== action.payload);
            return {
                totalRaitingFilter: newTotalRaitingFilter
            };
        default : 
            return state;
    }
}

export default visibilityFilterRaiting;
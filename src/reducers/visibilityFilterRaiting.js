import {ADD_RAITING_FILTER, 
        REMOVE_RAITING_FILTER
    } from '../actions/types';
const initialState = 0;

const visibilityFilterRaiting = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RAITING_FILTER : 
            return  action.payload;
        case REMOVE_RAITING_FILTER :
            const newRaitingFilter = state !== action.payload;
            console.log(newRaitingFilter)
            return newRaitingFilter;
        default : 
            return state;
    }
}

export default visibilityFilterRaiting;
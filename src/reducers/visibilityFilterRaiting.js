import {ADD_RAITING_FILTER} from '../actions/types';
const initialState = 0;

const visibilityFilterRaiting = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RAITING_FILTER : 
            return  action.payload;
        default : 
            return state;
    }
}

export default visibilityFilterRaiting;
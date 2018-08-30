import {RECEIVE_APARTAMENTS, REQUEST_APARTAMENTS} from '../actions/types';

const initialState = {
    isFetching: false,
    stuff: []
};

export default function appartamentReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_APARTAMENTS :
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_APARTAMENTS :
            return {
                ...state, 
                isFetching: false,
                stuff: action.payload
            };
        default:
            return state;
    }
}
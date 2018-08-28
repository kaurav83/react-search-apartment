import {TEST_DISPATCH} from '../actions/types';

const initialState = {
    isChoose: false,
    stuff: {}
};

export default function appartamentReducer(state = initialState, action) {
    switch (action.type) {
        case TEST_DISPATCH :
            return {...state, stuff: action.payload}
        default:
            return state;
    }
}
import {ADD_TOTAL_ROOM_FILTER, REMOVE_TOTAL_ROOM_FILTER} from "../actions/types";

const initialState = {totalRoomFilter: []};

const visibilityFilter = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TOTAL_ROOM_FILTER :
            return {
                ...state, totalRoomFilter: [...state.totalRoomFilter, action.payload]
            };
            // return Object.assign({}, state, {totalRoomFilter: [...state.totalRoomFilter, action.payload]})
        case REMOVE_TOTAL_ROOM_FILTER :
            const newTotalRoomFilter = state.totalRoomFilter.filter((item) => item !== action.payload);
            return {
                totalRoomFilter: newTotalRoomFilter
            }
        default :
            return state;
    }
}

export default visibilityFilter;
import {ADD_TOTAL_ROOM_FILTER, 
        REMOVE_TOTAL_ROOM_FILTER,
        ALL_ROOMS_FILTER,
        REMOVE_ALL_ROOMS_FILER
    } from "../actions/types";

const initialState = {totalRoomFilter: []};

const visibilityFilterTotalRoom = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TOTAL_ROOM_FILTER :
            return {
                ...state, totalRoomFilter: [...state.totalRoomFilter, action.payload]
            };
        case REMOVE_TOTAL_ROOM_FILTER :
            const newTotalRoomFilter = state.totalRoomFilter.filter((item) => item !== action.payload);
            return {
                totalRoomFilter: newTotalRoomFilter
            };
        case ALL_ROOMS_FILTER :
            return {
                ...state, totalRoomFilter: [...state.totalRoomFilter, action.payload]
            };
        case REMOVE_ALL_ROOMS_FILER :
            const newAllRoomFilter = state.totalRoomFilter.filter((item) => item !== action.payload);
            return {
                totalRoomFilter: newAllRoomFilter
            };
        default :
            return state;
    }
}

export default visibilityFilterTotalRoom;


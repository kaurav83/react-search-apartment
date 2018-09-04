import {RECEIVE_APARTAMENTS,
        REQUEST_APARTAMENTS, 
        SELECT_CURRENCY,
        ADD_TOTAL_ROOM_FILTER,
        REMOVE_TOTAL_ROOM_FILTER,
        START_PRICE,
        END_PRICE
        } from './types';
import axios from 'axios';

export const startPrice = (startPrice) => {
    return {
        type: START_PRICE,
        payload: startPrice
    };
}

export const endPrice = (endPrice) => {
    return {
        type: END_PRICE,
        payload: endPrice
    };
}

export const addRoomFilter = (totalRoomType) => {
    return {
        type: ADD_TOTAL_ROOM_FILTER,
        payload: totalRoomType
    };
};

export const removeRoomFilter = (totalRoomType) => {
    return {
        type: REMOVE_TOTAL_ROOM_FILTER,
        payload: totalRoomType
    }
};

export const selectCurrency = (currency) => {
    return {
        type: SELECT_CURRENCY,
        currency
    };
};  

export const getAppartament = () => dispatch => {
    dispatch({
        type: REQUEST_APARTAMENTS
    })

    axios.get(`http://demo4452328.mockable.io/property`)
    .then(response => 
        dispatch({
            type: RECEIVE_APARTAMENTS,
            payload: response.data.data
        })
    )
    .catch(error => 
        dispatch({
            type: RECEIVE_APARTAMENTS,
            payload: null
        })
    );
};
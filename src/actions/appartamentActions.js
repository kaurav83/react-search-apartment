import {RECEIVE_APARTAMENTS,
        REQUEST_APARTAMENTS, 
        SELECT_CURRENCY,
        ADD_TOTAL_ROOM_FILTER,
        REMOVE_TOTAL_ROOM_FILTER,
        START_PRICE,
        END_PRICE,
        ADD_RAITING_FILTER,
        REMOVE_RAITING_FILTER
        } from './types';
import axios from 'axios';

export const addRaitingFilter = (raitingType) => {
    // console.log(raitingType, 'add')
    return {
        type: ADD_RAITING_FILTER,
        payload: raitingType
    };
};

export const removeRaitingFilter = (raitingType) => {
    console.log(raitingType, 'remove')
    return {
        type: REMOVE_RAITING_FILTER,
        payload: raitingType
    };
};

export const startPrice = (startPrice) => {
    // console.log(startPrice, "in startPrice")
    return {
        type: START_PRICE,
        payload: startPrice
    };
}

export const endPrice = (endPrice) => {
    // console.log(endPrice, "in endPrice")
    return {
        type: END_PRICE,
        payload: endPrice
    };
}

export const addRoomFilter = (totalRoomType) => {
    // console.log(totalRoomType, 'add')
    return {
        type: ADD_TOTAL_ROOM_FILTER,
        payload: totalRoomType
    };
};

export const removeRoomFilter = (totalRoomType) => {
    console.log(totalRoomType, 'remove')
    return {
        type: REMOVE_TOTAL_ROOM_FILTER,
        payload: totalRoomType
    }
};

export const selectCurrency = (currency) => {
    // console.log(currency, "in selectCurrency")
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
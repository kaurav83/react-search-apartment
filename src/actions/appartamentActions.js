import {RECEIVE_APARTAMENTS,
        REQUEST_APARTAMENTS, 
        SELECT_CURRENCY,
        FILTER_APARTAMENT
        } from './types';
import axios from 'axios';

export const selectCurrency = (currency) => {
    return {
        type: SELECT_CURRENCY,
        currency
    };
};  

export const filterApartament = (selectedApartments) => {
    return {
        type: FILTER_APARTAMENT,
        selectedApartments
    }
}

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
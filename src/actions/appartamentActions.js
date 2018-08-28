import {TEST_DISPATCH} from './types';
import axios from 'axios';

export const getAppartament = () => dispatch => {
    axios.get(`http://demo4452328.mockable.io/property`)
    .then(response => 
        dispatch({
            type: TEST_DISPATCH,
            payload: response.data.data
        })
    )
    .catch(error => 
        dispatch({
            type: TEST_DISPATCH,
            payload: null
        })
    );
};
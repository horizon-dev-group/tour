import axios from 'axios';
import {setAlert} from "./alert";

import {

    GET_TEST
} from './types';

// region Get current users profile
export const getTestProfile = () => async dispatch => {
    dispatch({
        type: GET_TEST

    });

};
// endregion


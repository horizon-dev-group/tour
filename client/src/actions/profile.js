import axios from 'axios';
import {setAlert} from "./alert";

import {
    ACCOUNT_DELETED,
    CLEAR_PROFILE,
    GET_PROFILE,
    GET_PROFILES,
    PROFILE_ERROR,
    UPDATE_PROFILE
} from './types';

// region Get current users profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: e.response.statusText,
                status: e.response.status
            }
        });
    }
};
// endregion

// region Get all profiles
export const getProfiles = () => async dispatch => {
    dispatch({type: CLEAR_PROFILE});

    try {
        const res = await axios.get('/api/profile/');

        dispatch({
            type: GET_PROFILES,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: e.response.statusText,
                status: e.response.status
            }
        });
    }
};
// endregion

// region Get profile by ID
export const getProfileByID = userID => async dispatch => {
    try {
        const res = await axios.get(`/api/profile/users/${userID}`);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: e.response.statusText,
                status: e.response.status
            }
        });
    }
};
// endregion

// region Create or update profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.post('/api/profile', formData, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

        if (!edit) {
            history.push('/dashboard');
        }
    } catch (e) {
        const errors = e.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(
                setAlert(error.msg, 'danger')
            ));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: e.response.statusText,
                status: e.response.status
            }
        });
    }
};
// endregion

// region Delete Account and Profile
export const deleteAccount = () => async dispatch => {
    if (window.confirm('Are you sure you want to delete your account? This can NOT be undone!')) {
        try {
            const res = await axios.delete(`/api/profile/`);

            dispatch({
                type: CLEAR_PROFILE,
                payload: res.data
            });

            dispatch({
                type: ACCOUNT_DELETED,
                payload: res.data
            });

            dispatch(setAlert('Your account has been permanently deleted', 'success'));
        } catch (e) {
            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: e.response.statusText,
                    status: e.response.status
                }
            });
        }
    }
};
// endregion
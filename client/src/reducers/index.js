import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import test from './test';

export default combineReducers({
    alert,
    auth,
    profile,
    test
});
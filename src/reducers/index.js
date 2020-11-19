import { combineReducers } from 'redux';
import data from './data';
import posts from './posts';

export default combineReducers({
    data,
    posts
});